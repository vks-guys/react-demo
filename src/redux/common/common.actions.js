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

export const loadingShow = () => async dispatch => {
    dispatchAction(dispatch, commonTypes.LOADING_SHOW, true);
}

export const loadingHide = () => async dispatch => {
    dispatchAction(dispatch, commonTypes.LOADING_HIDE, false);
}


export const notificationShow = (message) => async dispatch => {
    dispatchAction(dispatch, commonTypes.NOTIFICATION_SHOW, message);
}

export const notificationHide = (message) => async dispatch => {
    dispatchAction(dispatch, commonTypes.NOTIFICATION_HIDE, message);
}