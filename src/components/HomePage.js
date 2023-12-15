// components/HomePage.js

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PostList from './PostList'; // Assume you have a PostList component
import postsData from '../posts.json';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Set the state with the posts data from posts.json
    setPosts(postsData);
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
};

// const HomePage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch your blog posts data here and update the state
//     // For simplicity, you can use a static list or fetch from an API
//     const fetchData = async () => {
//       // Fetch data logic here
//       const data = await fetch('your-api-endpoint');
//       const postsData = await data.json();
//       setPosts(postsData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>My Blog</h1>
//       <PostList posts={posts} />
//     </div>
//   );
// };

export default HomePage;
