import React, { useState } from 'react';
import axios from 'axios';

const AddNewLink = ({ addLink }) => {
  const [formData, setFormData] = useState({
    url: "",
  });
  const [error, setError] = useState("");

  const handleChange = evt => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
  
  const handleSubmit = async evt => {
    try {
      evt.preventDefault();
      const { data } = await axios.post('/api/links', formData);
      if (data.status !== 200) {
	setError(data.message);
	setTimeout(() => {
	  setError("");
	}, 5000);
      } else {
	addLink(data);
      }
    } catch (err) {
      console.error(err);
    }
  }
    
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
	<input
	name="url"
	type="url"
	placeholder="e.g. https://wikipedia.org"
	onChange={handleChange}
	/>
	<button>
	  Add
	</button>
      </form>
    </div>
  )
};

export default AddNewLink;
