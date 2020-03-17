import axios from "axios";
import { FETCH_USER } from "./types";
//action creator
export const fetchUser = () => async dispatch => {
    // const request = axios.get('./api/current_user');
    // return{
    //   type:FETCH_USER,
    //   payload:request
    // };

    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });

    // dispatch({ type: FETCH_USER, payload: await axios.get("/api/current_user") });
};
//reduxThunk will see that we return to function and it will automatically call it with the dispatch
//then make request
//wait until get the response back from api
//once have the response, only at that point will we actually dispatch our action