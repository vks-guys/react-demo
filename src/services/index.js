const { getToken } = require('../utils/sessions.helper')


// This is used for check to required parameter is used !
export const requiredHeader = isToken => {
    if (isToken) {
        let header = {
            'Authorization': `Basic ${getToken()}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return header;
    }
    else {
        let header = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return header;
    }
}


// This is used for validating the response data !
export const validatingResponseData = async response => {

    return new Promise((resolve, reject) => {
        let responseData = undefined;
        responseData = response;

        if (!responseData) {
            return reject(responseData);
        }

        if (responseData.status === 200) {
            return resolve(responseData.data);
        }

        return reject(responseData);
    });
};


// This is used to generating the error if we r getting any type of error !
export const generatingError = (message, status = true, code, title) => {
    throw new Error({ message, status, code, title });
};