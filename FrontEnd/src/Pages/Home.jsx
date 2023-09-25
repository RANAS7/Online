import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import "../Styles/Home.css";
import axios from "axios";

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5713/getRooms") // Update the URL to match your server route
      .then((response) => {
        setRooms(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card-container">
      {rooms.map((room, index) => (
        <div key={index} className="room-card">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt={room.title}
            className="room-image"
          />
          <div className="room-info">
            <h1 className="room-title">{room.title}</h1>
            <p className="room-description">{room.description}</p>
            <div className="room-category">
              <span className="room-category-label">{room.category}</span>
            </div>
            <div className="room-sizes">
              <span className="room-size">8 UK</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
