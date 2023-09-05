import React, { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import Validation from '../Validation/LoginValidation';
const LogIn = () => {

  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const Navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const handleChange = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values));
    if(errors.username === "" && errors.password === "")
    {
      axios.post('http://localhost:80/login', values)
      .then(res => {
        if(res.data === "Success") {
          Navigate('/');
        }
        else {
            alert("No record existed");
        }
      })
      .catch(err => console.log(err));
    }
    

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder='username'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.username && <span className='text-danger'>{errors.username}</span>}  
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder='******'
          onChange={handleChange} 
        />
          {errors.password && <span className='text-danger'>{errors.password}</span>}  
      </div>
      <button type="submit">LogIn</button>
      <p>If you don't have an account</p><NavLink to='/signUp'>SignUp</NavLink>
    </form>
    
    </div>
  );
};

export default LogIn;