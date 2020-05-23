import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddNewLink } from '../components';

const LinksContainer = () => {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    const { data } = await axios.get('/api/links');
    setLinks(data);
    return data;
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  const addLink = link => {
    setLinks([...links, link]);
  }

  return (
    <div id="links-container">
      <AddNewLink addLink={addLink} />
      <LinksList links={links} />
    </div>
  )
};

export default LinksContainer;


const LinksList = ({ links }) => {
  return (
    <>
      {links.length === 0
      ? <h2>Loading...</h2>
      : <ul>
	{links.length && links.map(link => (
	  <SingleLink
	    key={`link${link.id}`}
	    link={link}
	  />
	))}
      </ul>
      }
    </>
  )
};

const SingleLink = ({ link }) => {
  const handleDelete = () => {}
  
  return (
    <li
      className="link-item"
    >
      <span onClick={handleDelete}>
	❌  {/* X */}
      </span>
      <a href={link.url}>
	{link.url}
      </a>
    </li>
  )
};
