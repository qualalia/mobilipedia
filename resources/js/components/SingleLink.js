import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeLink } from '../store';
import { makeEmbedLinkYT } from '../utils.js';

const SingleLink = ({ link }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  
  let url;
  // TODO: generalize to "any" video url
  if (link.url.includes("youtube")) {
    url = makeEmbedLinkYT(link.url)
  }
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  }

  const handleDelete = linkId => {
    dispatch(removeLink(linkId));
  }
  
  return (
    <li
      className={`link-item${expanded ? " expanded" : ""}`}
    >
      <div className="edit-delete">
	<span onClick={() => handleDelete(link.id)}>
	  ❌  {/* X */}
	</span>
	<span onClick={() => history.push("/edit")}>
	  ✏️
	</span>
      </div>
      <iframe
      src={url}
	allowFullScreen
      width={100 + "%"}
      />
      <section>
	{link.description ? link.description : ""}
      </section>
      <section>
	{link.tags.split(",").map(tag =>
	  <div key={`t${tag}`}>
	    {tag}
	  </div>
	)}
      </section>
      <div onClick={toggleExpand}>
	{expanded ? "Show less" : "Show more"}
      </div>
      {expanded &&
       <section>
	 <div>
	   user-added info 1
	 </div>
	 <div>
	   user-added info 2
	 </div>
       </section>}
    </li>
  )
};

export default SingleLink;
