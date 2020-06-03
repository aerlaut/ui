import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover, Button, Space,
} from 'antd';


import EditableField from '../../../../components/editable-field/EditableField';
import ColorPicker from '../../../../components/color-picker/ColorPicker';


const ClusterPopover = (props) => {
  const { popoverPosition, onCreate, onCancel } = props;
  const [clusterName, setClusterName] = useState('New Cluster');
  const [clusterColor, setClusterColor] = useState('#0000FF');

  const getContent = () => (
    <Space direction='vertical' style={{ width: '100%' }}>
      <div>
        <EditableField
          onEdit={(e) => {
            setClusterName(e);
          }}
          showDelete={false}
        >
          {clusterName}
        </EditableField>
        <ColorPicker
          color={clusterColor}
          onColorChange={((e) => {
            setClusterColor(e);
          })}
        />
      </div>
      <div>
        <Button
          type='primary'
          size='small'
          onClick={(() => { onCreate(clusterName, clusterColor); })}
        >
          Create

        </Button>
        <Button
          type='default'
          size='small'
          onClick={(() => onCancel())}
        >
          Cancel

        </Button>
      </div>
    </Space>
  );

  const content = getContent();

  return (
    <div style={{ position: 'absolute', left: popoverPosition.x + 20, top: popoverPosition.y + 20 }}>
      <Popover title='Creating a new cluster' content={content} visible />
    </div>
  );
};

ClusterPopover.defaultProps = {
  onCreate: () => null,
  onCancel: () => null,

};

ClusterPopover.propTypes = {
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
  popoverPosition: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ClusterPopover;