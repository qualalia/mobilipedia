import {
  SET_LINKS,
  SET_LINKS_ERROR,
  ADD_LINK,
  ADD_LINK_ERROR,
  DELETE_LINK,
  DELETE_LINK_ERROR,
} from "./actionTypes.js";

export const setLinks = links => ({
  type: SET_LINKS,
  links,
});

export const setLinksError = error => ({
  type: SET_LINKS_ERROR,
  error,
});

export const addLink = link => ({
  type: ADD_LINK,
  link,
});

export const addLinkError = error => ({
  type: ADD_LINK_ERROR,
  error,
});

export const deleteLink = linkId => ({
  type: DELETE_LINK,
  linkId,
})

export const deleteLinkError = error => ({
  type: DELETE_LINK_ERROR,
  error,
});
