import React from 'react';
import { SingleLink } from '../components';

const LinksList = ({ links, handleDelete }) => {
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

export default LinksList;
