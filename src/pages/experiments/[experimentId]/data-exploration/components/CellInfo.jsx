import React, { useState, useEffect } from 'react';
import {
  useSelector,
} from 'react-redux';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const CellInfo = (props) => {
  const { coordinates, componentType } = props;

  const cellInfo = useSelector((state) => state.cellInfo);
  const [cellInfoVisible, setCellInfoVisible] = useState(false);

  useEffect(() => {
    if (!cellInfo.cellName) {
      return;
    }
    if (cellInfo.componentType !== componentType) {
      setCellInfoVisible(false);
    } else {
      setCellInfoVisible(true);
    }
  }, [cellInfo]);

  const renderCellInfo = () => (
    <Card
      size='small'
      style={{
        zIndex: 6,
        border: 0,
        position: 'absolute',
        left: `${coordinates.current.x + 80}px`,
        top: `${coordinates.current.y + 20}px`,
      }}
    >
      {cellInfo.cellName ? (
        <div>
          Cell id:&nbsp;
          {cellInfo.cellName}
        </div>
      ) : <></>}
      {cellInfo.geneName ? (
        <div>
          Gene name:&nbsp;
          {cellInfo.geneName}
        </div>
      ) : <></>}
      {cellInfo.expression !== undefined ? (
        <div>
          Expression Level:&nbsp;
          {parseFloat(cellInfo.expression.toFixed(3))}
        </div>
      ) : <></>}
    </Card>
  );

  if (cellInfoVisible && cellInfo.cellName && Object.keys(coordinates.current).length > 0) {
    return renderCellInfo();
  }

  return (<></>);
};

CellInfo.defaultProps = {};

CellInfo.propTypes = {
  coordinates: PropTypes.object.isRequired,
  componentType: PropTypes.string.isRequired,
};

export default CellInfo;
