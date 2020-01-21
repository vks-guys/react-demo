import * as dashboardTypes from './dashboard.types';
import axios from 'axios';

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


export const getList = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await response.data;
    console.log("dasboard-actions", data);
    dispatchAction(dispatch, dashboardTypes.DASHBOARD_LIST, data);
}

export const getDataById = (id) => async dispatch => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.data;
    console.log("dasboard-actions-By-Id", data);
    dispatchAction(dispatch, dashboardTypes.DASHBOARD_BY_ID, data);
}