import React, { useEffect, useState } from "react";
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

  // Filter rooms by category
  const roomCards = rooms
    .filter((room) => room.category === "Room")
    .map((room, index) => (
      <div key={index} className="room-card">
        {/* <div>{room.image}</div> */}
        <h1 className="room-title">{room.title}</h1>
        <p className="room-description">{room.description}</p>
        <div className="room-category">
          <span className="room-category-label">{room.category}</span>
        </div>
        <div className="room-sizes">
          <span className="room-size">8 UK</span>
        </div>
      </div>
    ));

  // Filter rooms by category
  const apartmentCards = rooms
    .filter((room) => room.category === "Apartment")
    .map((room, index) => (
      <div key={index} className="room-card">
        {/* <div>{room.image}</div> */}
        <h1 className="room-title">{room.title}</h1>
        <p className="room-description">{room.description}</p>
        <div className="room-category">
          <span className="room-category-label">{room.category}</span>
        </div>
        <div className="room-sizes">
          <span className="room-size">8 UK</span>
        </div>
      </div>
    ));
  return (
    <div>
      <div className="category-title">Rooms</div>
      <div className="card-container">{roomCards}</div>

      <div className="category-title">Apartments</div>
      <div className="card-container">{apartmentCards}</div>
    </div>
  );
};

export default Home;
