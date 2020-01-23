import { combineReducers } from 'redux';
import dashboardReducers from './dashboard/dashboard.reducers';
import commonReducers from './common/common.reducers';

export default combineReducers({
    dashboard: dashboardReducers, common: commonReducers
});