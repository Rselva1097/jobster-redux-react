import customFetch,{checkForUnauthorizedResponse} from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsStats } from '../allJobs/allJobsSlice';
import { clearValues } from './job/jobSlice'
export const registerUserThunk = async(url, user, thunkAPI)=> {
     try {
        const resp = await customFetch.post(url, user)
        
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
        
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
     try {
        const resp = await customFetch.post(url, user)
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue( error.response.data.msg)
        
    }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
      try {
        const resp = await customFetch.patch(url, user)
        return resp.data
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue( 'Unauthorized Logging Out....')

        }
  return checkForUnauthorizedResponse(error, thunkAPI);

        
    }
}

export const clearStoreThunk = async (message,thunkAPI) => {
    try {
       // logout user
    thunkAPI.dispatch(logoutUser(message));
    // clear jobs value
    thunkAPI.dispatch(clearAllJobsStats());
    // clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
    } catch (error) {
        return Promise.reject()
    }
}