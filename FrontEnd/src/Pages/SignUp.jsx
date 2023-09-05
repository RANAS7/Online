import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Validation from "../Validation/SignupValidation";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.username === "" && errors.email === "" && errors.password === ""
    ) {
      axios.post("http://localhost:5174/signUp", values)
        .then(res => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.username && (
            <span className="text-danger">{errors.username}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>
        <button type="submit">SignUp</button>
        <p>If you have already an account</p>
        <NavLink to="/login">LogIn</NavLink>
      </form>
    </div>
  );
};

export default SignUp;
