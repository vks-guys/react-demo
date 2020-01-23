import { SESSION } from './constants';


// Initailize localStorage for save and get data
const localStorageData = localStorage || {
    getItem: key => {
        return {}
    },
    setItem: (key, value) => { },
    removeItem: key => { }
};


// This is use for Saving the session value in the localStorage
export const saveInSession = (key, value) => {
    localStorageData.setItem(key, value);
};

// This is use for Getting the session value in the localStorage
export const getFromSession = (key) => {
    const item = localStorageData.getItem(key);
    return item;
};



/**
 * Here we can set and get the token
 */

export const getToken = () => {
    return localStorageData.getItem(SESSION.TOKEN);
}

export const setToken = (token) => {
    return localStorageData.setItem(SESSION.TOKEN, token);
}

/**
 * Here we can set and get the user Details
 */

