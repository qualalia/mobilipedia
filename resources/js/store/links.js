import axios from "axios";
import {
  SET_LINKS,
  ADD_LINK,
  DELETE_LINK,
} from './actionTypes.js';
import {
  setLinks,
  setLinksError,
  addLink,
  addLinkError,
  deleteLink,
  deleteLinkError,
} from "./actionCreators.js";
import store from '../store';

export function fetchLinks() {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/links`);
      dispatch(setLinks(data));
    } catch (err) {
      console.error(err);
      dispatch(setLinksError(err));
    }
  }
}

export const addNewLink = link => {
  return async dispatch => {
    try {
      const foundLink = store.getState().links.find(l => l.url === link.url)
      if (foundLink) {
	dispatch(addLinkError({ message: "Link already exists!" }));
	return;
      }
      const { data } = await axios.post(`/api/links`, link);
      console.log('add thunk got from server: ', data);
      if (!data.url) {
	dispatch(addLinkError(data));
      } else {
	dispatch(addLink(data));
      }
    } catch (err) {
      console.error(err);
      dispatch(addLinkError(err));
    }
  }
}

export const removeLink = linkId => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/links/${linkId}`);
      dispatch(deleteLink(linkId));
    } catch (err) {
      console.error(err);
      dispatch(deleteLinkError);
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_LINKS:
      return action.links;
    case ADD_LINK:
      return [...state, action.link];
    case DELETE_LINK:
      return state.filter(link => link.id !== action.linkId);
    default:
      return state;
  }
}
