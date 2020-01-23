import * as commonTypes from './common.types';
let initialState = {
    
}

const common = (state = initialState, action) => {
    switch (action.type) {
        /**
         * This case is used for Loading !
         */
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

        /**
         * This case is used for Notification !
         */
        case commonTypes.NOTIFICATION_SHOW: {
            return {
                ...state,
                isNotification: true,
                notification: { ...action.data }
            }
        }
        case commonTypes.NOTIFICATION_HIDE: {
            return {
                ...state
            }
        }

        /**
         * 
         */
        case commonTypes.ERROR_SHOW: {
            return {
                isError: true,
                errorResponse: { ...action.data }
            }
        }
        case commonTypes.ERROR_HIDE: {
            return {
                isError: false
            }
        }

        /**
         * This is default case where we can send state object !
         */
        default: {
            return {
                ...state
            }
        }
    }
}

export default common;