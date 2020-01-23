import axios from 'axios';
import { requiredHeader, validatingResponseData, generatingError } from '.';

export const Get = async (url, isAuth = false) => {
    let response = undefined;
    try {
        response = await axios.get(url, requiredHeader(isAuth));

        return await validatingResponseData(response);

    }
    catch (error) {
        generatingError(error.message, false, 500, "Invalid Request !");
    }
}