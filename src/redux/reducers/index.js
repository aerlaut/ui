/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import cellSetsReducer from './cellSets';
import notificationsReducer from './notificationsReducer';
import embeddingsReducer from './embeddings';
import genesReducer from './genes';
import differentialExpressionReducer from './differentialExpression';
import layoutReducer from './layout/layout';
import plotsReducer from './plots/index';
import cellInfoReducer from './cellInfoReducer';

export default combineReducers({
  cellSets: cellSetsReducer,
  notifications: notificationsReducer,
  embeddings: embeddingsReducer,
  genes: genesReducer,
  differentialExpression: differentialExpressionReducer,
  cellInfo: cellInfoReducer,
  layout: layoutReducer,
  plots: plotsReducer,
});
