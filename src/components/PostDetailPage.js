// components/PostDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from './PostDetail'; // Assume you have a PostDetail component
import postsData from '../posts.json';

// components/PostDetailPage.js

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the individual post based on postId
    const foundPost = postsData.find((p) => p.id === parseInt(postId, 10));
    setPost(foundPost);
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <PostDetail post={post} />
    </div>
  );
};

// const PostDetailPage = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     // Find the individual post based on postId
//     const foundPost = postsData.find((p) => p.id === parseInt(postId, 10));
//     setPost(foundPost);
//   }, [postId]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <PostDetail post={post} />
//     </div>
//   );
// };

// const PostDetailPage = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     // Fetch the individual post data based on postId
//     // For simplicity, you can use a static list or fetch from an API
//     const fetchData = async () => {
//       const data = await fetch(`your-api-endpoint/${postId}`);
//       const postData = await data.json();
//       setPost(postData);
//     };

//     fetchData();
//   }, [postId]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <PostDetail post={post} />
//     </div>
//   );
// };

export default PostDetailPage;