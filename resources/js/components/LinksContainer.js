import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AddNewLink, LinksList } from '../components';
import { makeEmbedLinkYT } from '../utils.js';
import { fetchLinks } from '../store';

const LinksContainer = () => {
//  const [links, setLinks] = useState([]);
  const dispatch = useDispatch();
  const links = useSelector(state => state.links);
  const error = useSelector(state => state.error);
  
/*  const fetchLinks = async () => {
    const { data } = await axios.get('/api/links');
    setLinks(data);
    return data;
  }*/

  useEffect(() => {
    dispatch(fetchLinks())
  }, []);

/*  const addLink = link => {
    setLinks([...links, link]);
  }*/

/*  const deleteLink = async linkId => {
    const { data } = await axios.delete(`/api/links/${linkId}`);
    setLinks(links.filter(link => link.id !== linkId));
  }*/

  return (
    <div id="links-container">
      <AddNewLink />
      <LinksList
	links={links}
      />
    </div>
  )
};

export default LinksContainer;
