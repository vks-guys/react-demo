import * as commonTypes from './common.types';

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


/**
 * 
 */
export const loadingShow = () => async dispatch => {
    dispatchAction(dispatch, commonTypes.LOADING_SHOW, true);
}

export const loadingHide = () => async dispatch => {
    dispatchAction(dispatch, commonTypes.LOADING_HIDE, false);
}



/**
 * 
 * @param {*} data 
 */
export const notificationShow = (data) => async dispatch => {
    dispatchAction(dispatch, commonTypes.NOTIFICATION_SHOW, data);
}

export const notificationHide = () => async dispatch => {
    dispatchAction(dispatch, commonTypes.NOTIFICATION_HIDE, false);
}



/**
 * 
 * @param {*} data 
 */
export const errorShow = (data) => async dispatch => {
    dispatchAction(dispatch, commonTypes.ERROR_SHOW, data);
}

export const errorHide = (message) => async dispatch => {
    dispatchAction(dispatch, commonTypes.ERROR_HIDE, false);
}