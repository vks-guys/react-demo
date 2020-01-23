import * as dashBoardTypes from './dashboard.types';
let initialState = {

}

const dashBoard = (state = initialState, action) => {
    switch (action.type) {
        case dashBoardTypes.DASHBOARD_INIT: {
            return {
                ...state
            }
        }
        case dashBoardTypes.DASHBOARD_LIST: {
            return {
                ...state,
                dashboardList: action.data
            }
        }

        case dashBoardTypes.DASHBOARD_BY_ID: {
            return {
                ...state,
                dashboardById: action.data
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}

export default dashBoard;