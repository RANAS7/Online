import React, { useState, useRef } from 'react';
import '../Styles/AddRoom.css'
import { TextField, MenuItem } from '@mui/material';

const AddRoom = ({onSubmit}) => {
  const inputRef = useRef(null);
  const [images, setImages] =useState("");

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    category: ''
  })

  const categories = [
    {
      value: 'Room',
      label: 'Room',
    },
    {
      value: 'Apartment',
      label: 'Apartment',
    }
  ];
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    const file = e.taget.file[0];
    console.log(file)
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleImageClick =(e)=>{
    inputRef.current.click();

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.title.trim()) {
        validationErrors.username = "Title is required"
    }

    if(!formData.image.trim()) {
        validationErrors.image = "Image is required"
    }

    if(!formData.description.trim()) {
        validationErrors.description = "Description is required"
    } 

    if(formData.category.trim()) {
        validationErrors.category = "Category is required"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='addRoom'>
        <TextField
           label='Title'
          name="title" 
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.title && <span>{errors.title}</span>}  
      </div>
      <div onClick={handleImageClick}>
        <label>Image:</label>
        <img src="./../upload.png" alt="upload image" />
        <input
        className='uploadImage'
        type="file"
        name="image"
        ref={inputRef}
        accept="image/*"
        onChange={handleImageClick}
        />
        {errors.image && <span>{errors.image}</span>}  
      </div>
      <div>
        <TextField
        label='Description'
        name='description'
        autoComplet='off'
        onChange={handleChange}
        />
          {errors.description && <span>{errors.description}</span>}  
      </div>
      <div>
      <TextField
          id="outlined-select-category"
          select
          label="Category"
          defaultValue="Room"
          helperText="Please select your category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}  
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRoom;
