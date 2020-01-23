import * as dashboardTypes from './dashboard.types';
import * as commonTypes from '../common/common.types';
import { Get } from '../../services/services.data';
import { config } from '../../config';

/**
 * 
 * @param {*} dispatch 
 * @param {*} type 
 * @param {*} data
 */

const dispatchAction = (dispatch, type, data) => {
    dispatch({
        type,
        data
    });
};

export const getDashboardList = () => async dispatch => {
    try {
        dispatchAction(dispatch, commonTypes.LOADING_SHOW, true);
        const data = await Get(`${config.BASE_URL}posts`);
        
        dispatchAction(dispatch, dashboardTypes.DASHBOARD_LIST, data);
        dispatchAction(dispatch, commonTypes.LOADING_SHOW, false);
    } catch (error) {

    }
}

export const getDashboardById = (id) => async dispatch => {
    try {
        dispatchAction(dispatch, commonTypes.LOADING_SHOW, true);
        const data = await Get(`${config.BASE_URL}posts/${id}`);

        dispatchAction(dispatch, dashboardTypes.DASHBOARD_BY_ID, data);
        dispatchAction(dispatch, commonTypes.LOADING_SHOW, false);

    } catch (error) {

    }
}