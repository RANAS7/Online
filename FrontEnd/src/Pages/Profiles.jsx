// UserProfile.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profiles = ({ userId }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user details from the server based on the userId
    axios.get(`http://localhost:5713/user/${userId}`).then((response) => {
      setUser(response.data.user);
      setPosts(response.data.posts);
    });
  }, [userId]);

  return (
    <div>
      <div>
        <h2>Profile Details</h2>
        <p>Name: {user.full_name}</p>
        <p>Email: {user.email}</p>
        {/* Add other user details as needed */}
      </div>
      <div>
        <h2>Posted Content</h2>
        {posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {/* Display other post details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
