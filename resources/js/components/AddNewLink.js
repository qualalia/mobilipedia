import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addNewLink, addLinkError } from '../store';

const AddNewLink = () => {
  const [formData, setFormData] = useState({
    url: "",
  });
  const errorMsg = useSelector(state => state.error.addLink);
  const [errorToDisplay, setError] = useState("");
  const dispatch = useDispatch();

  if (errorMsg && errorMsg.message) {
    setTimeout(
      () => {
	dispatch(addLinkError({ message: "" }))
      },
      2000
    )
  }

  const handleChange = evt => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addNewLink(formData));
    /*      const { data } = await axios.post('/api/links', formData);
       if (!data.url) {
       setError(data.message);
       setTimeout(() => {
       setError("");
       }, 5000);
       } else {
       addLink(data);
       }
       } catch (err) {
       console.error(err);
       }*/
  }
 
  return (
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
      <div
	className="form-error-msg"
      >
	{errorMsg && errorMsg.message}
      </div>
    </form>
  )
};

export default AddNewLink;
