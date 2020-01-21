import { combineReducers } from 'redux';
import dashboardReducers from './dashboard/dashboard.reducers';

export default combineReducers({
    dashboard: dashboardReducers
});