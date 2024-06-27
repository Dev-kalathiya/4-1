import React from 'react';
import './App.css'

const Greeting = ({ name = 'Guest' }) => {
  return (
    <div id="root">
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Greeting;

// import React, { useState, useEffect } from 'react';
// import './App.css';

// const UserProfileCard = ({ name, age, bio, location, profilePicture, follow, unfollow, isFollowing }) => {
//   const [bioDisplay, setBioDisplay] = useState(bio.length > 100 ? bio.slice(0, 100) + '...' : bio);
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleBioClick = () => {
//     setBioDisplay(bio.length > 100 ? bio : bio.slice(0, 100) + '...');
//   };

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       const newComment = {
//         comment: comment.trim(),
//         timestamp: new Date().toLocaleString(),
//       };
//       setComments([...comments, newComment]);
//       setComment('');
//     }
//   };

//   const handleCommentDelete = (index) => {
//     const newComments = [...comments];
//     newComments.splice(index, 1);
//     setComments(newComments);
//   };

//   const handleFollow = () => {
//     if (!isFollowing) {
//       follow(name);
//     } else {
//       unfollow(name);
//     }
//   };

//   return (
//     <div className="profile-card">
//       <img src={profilePicture} alt={name} className="profile-picture" />
//       <div className="profile-info">
//         <h2>{name}</h2>
//         <p>{age} years old</p>
//         <p>{location}</p>
//         <p>{bioDisplay}</p>
//         <button onClick={handleBioClick}>{bioDisplay.length > 100 ? 'Read less' : 'Read more'}</button>
//         <button onClick={handleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
//       </div>
//       <div className="comments-section">
//         <h3>Comments</h3>
//         <form onSubmit={handleCommentSubmit}>
//           <input type="text" value={comment} onChange={handleCommentChange} placeholder="Add a comment..." />
//           <button type="submit">Submit</button>
//         </form>
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}>
//               <p>{comment.comment}</p>
//               <p>{comment.timestamp}</p>
//               <button onClick={() => handleCommentDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserProfileCard;