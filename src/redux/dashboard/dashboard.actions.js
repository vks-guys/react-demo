import * as dashboardTypes from './dashboard.types';
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
        const data = await Get(`${config.BASE_URL}posts`);

        dispatchAction(dispatch, dashboardTypes.DASHBOARD_LIST, data);
    } catch (error) {

    }
}

export const getDashboardById = (id) => async dispatch => {
    try {
        const data = await Get(`${config.BASE_URL}posts/${id}`);

        dispatchAction(dispatch, dashboardTypes.DASHBOARD_BY_ID, data);

    } catch (error) {

    }
}