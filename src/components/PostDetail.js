// components/PostDetail.js

import React from 'react';

const PostDetail = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      {/* Add other details based on your post structure */}
    </div>
  );
};

// const PostDetail = ({ post }) => {
//   return (
//     <div>
//       <p>{post.content}</p>
//       {/* Add other details based on your post structure */}
//     </div>
//   );
// };

export default PostDetail;
