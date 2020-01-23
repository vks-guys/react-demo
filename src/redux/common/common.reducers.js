import * as commonTypes from './common.types';
let initialState = {
    isLoader: false,
    isNotification: false,
    notification: {}
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case commonTypes.LOADING_SHOW: {
            return {
                ...state,
                isLoader: action.data
            }
        }
        case commonTypes.LOADING_HIDE: {
            return {
                ...state,
                isLoader: action.data
            }
        }
        case commonTypes.NOTIFICATION_SHOW: {
            return {
                ...state,
                isNotification: true,
                notification: {...action.data}
            }
        }
        case commonTypes.NOTIFICATION_HIDE: {
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default common;