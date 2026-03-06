import {FETCH_PROGRAM_DATA} from "./actionType";
import axios from "axios";

export const FetchProgramData = () => {
    return async (dispatch) => {

        // data will come from api through axios and use redux-thunk middleware  
        try{
            const response = await axios.get("https://sheet2api.com/v1/FQT6wK8QRCyE/program");
            
            // dispach the data come from api 
            dispatch({
                type: FETCH_PROGRAM_DATA,
                payload: response.data,
            });
            
        }
        catch(error){
            console.log(error);
        }
    }
}