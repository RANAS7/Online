import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Added the import for axios
import Validation from "../Validation/LoginValidation";
import { useAuth } from "../Components/Authentication";

const LogIn = () => {
  const { isAuthenticated, logout, login } = useAuth();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Changed variable name to navigate

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value, // Removed extra square brackets
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/login",
          values
        );

        if (data._id) {
          // Save the user ID in local storage
          localStorage.setItem("userId", data._id);
        }

        console.log(data);
        login();
        navigate("/");
      } catch (error) {
        // Handle network errors or other unexpected issues
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="email"
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
        <button type="submit">LogIn</button>
        <p>If you don't have an account</p>
        <NavLink to="/signUp">SignUp</NavLink>
      </form>
    </div>
  );
};

export default LogIn;
