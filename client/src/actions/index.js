import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";
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

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
  //take the response and dispatch an action of type FETCH_USER to update local user model
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
