import {
  SET_LINKS_ERROR,
  ADD_LINK_ERROR,
  DELETE_LINK_ERROR
} from "./actionTypes.js"

export default function(state = {}, action) {
  switch (action.type) {
    case SET_LINKS_ERROR:
      return { ...state, links: action.error };
    case ADD_LINK_ERROR:
      return { ...state, addLink: action.error };
    case DELETE_LINK_ERROR:
      return { ...state, deleteLink: action.error };
    default:
      return state;
  }
}
