import React, { useState } from 'react';
import axios from 'axios';

const AddNewLink = ({ addLink }) => {
  const [formData, setFormData] = useState({
    url: "",
    errorMessage: "",
  });

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
      addLink(data);
    } catch (err) {
      console.error(err);
    }
  }
    
    
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
	<label htmlFor="url">
	  URL:
	</label>
	<input
	name="url"
	type="url"
	placeholder="Link"
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
