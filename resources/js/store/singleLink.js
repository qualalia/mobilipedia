import axios from "axios";

import { ADD_LINK, ADD_LINK_ERROR } from "./actionTypes.js"

const addLink = link => ({
  type: ADD_LINK,
  link,
});

export const addLinkThunk = () =>
  async dispatch => {
    try {
      const { data } = axios.post(`/api/links`);
      dispatch(addLink(data));
    } catch (err) {
      console.error(err);
      dispatch(addLinkError(err));
    }
  }

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_LINK:
      return action.link;
    default:
      return state;
  }
}
