// import React from 'react';
// import List from './List';
// import './App.css';

// function App() {
//   return (
//   < List />
//     );
// }

// export default App;

// 1.

// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });
//   const [editPost, setEditPost] = useState(null);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = () => {
//     // Here you can fetch posts from your API or database
//     // For this example, I'll simulate fetching from an in-memory store
//     const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
//     setPosts(storedPosts);
//   };

//   const addPost = () => {
//     const updatedPosts = [...posts, newPost];
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//     setNewPost({ title: '', body: '' });
//   };

//   const deletePost = (id) => {
//     const updatedPosts = posts.filter((post, index) => index !== id);
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleEdit = (id) => {
//     const postToEdit = posts[id];
//     setEditPost(postToEdit);
//   };

//   const updatePost = () => {
//     const updatedPosts = [...posts];
//     updatedPosts[editPost.id] = editPost;
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//     setEditPost(null);
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//             <button onClick={() => deletePost(index)}>Delete</button>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//       {editPost ? (
//         <div>
//           <h2>Edit Post</h2>
//           <input
//             type="text"
//             name="title"
//             value={editPost.title}
//             onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
//           />
//           <textarea
//             name="body"
//             value={editPost.body}
//             onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
//           />
//           <button onClick={updatePost}>Update Post</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Add New Post</h2>
//           <input
//             type="text"
//             placeholder="Title"
//             name="title"
//             value={newPost.title}
//             onChange={handleInputChange}
//           />
//           <textarea
//             placeholder="Body"
//             name="body"
//             value={newPost.body}
//             onChange={handleInputChange}
//           />
//           <button onClick={addPost}>Add Post</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;









// import React, { useState } from "react";
// import './App.css'

//   export default function Hello() {
//     let [name, setName] = useState("Hi handsome what your name");
//     function updateName() {
//       let newName = prompt("What is your name?");
//       setName(newName);
//     }

//   return (
//     <div>
//       <h1>
//         {name}
//       </h1>
//       <button onClick={updateName}>
//         Update name
//       </button>
//     </div>
//   );
// }

// import React from "react";

// export default function Hello(props) {
//   function fullName() {
//     return `${props.firstName} ${props.lastName}`;
//   }
//   return (
//     <p>
//       {fullName()}
//     </p>
//   );
// }

// <Hello firstName="Matt" lastName="Delac" />



// it is a use state on using the react on the page.
// import React, { useState } from "react";

// export default function LoginForm() {
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`Loging in with ${username} and ${password}`);
//   }

//   function updateUsername(event) {
//     setUsername(event.target.value);
//   }

//   function updatePassword(event) {
//     setPassword(event.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" onChange={updateUsername} />
//       <input type="password" placeholder="Password" onChange={updatePassword} />
//       <input type="submit" value="Login" />
//     </form>
//   );
// }

// 2.

// import React, {useState} from "react";
// import PlayerList from "./PlayerList";
// import EditPlayer from "./EditPlayer";
// import AddPlayer from "./AddPlayer";
// import DeletePlayer from "./DeletePlayer";
// import data from "./data/players.json";

// function App() {
//   const [players, setPlayers] = useState(data.players);
//   const [currentPlayer, setCurrentPlayer] = useState(null);
//   const [showEditPlayer, setShowEditPlayer] = useState(false);
//   const [showAddPlayer, setShowAddPlayer] = useState(false);
//   const [showDeletePlayer, setShowDeletePlayer] = useState(false);
//   const [playerToDelete, setPlayerToDelete] = useState(null);

//   const handleDelete = (id) => {
//     setPlayerToDelete(id);
//     setShowDeletePlayer(true);
//   };

//   const deletePlayer = (id) => {
//     const updatedPlayers = players.filter((player) => player.id !== id);
//     setPlayers(updatedPlayers);
//     setShowDeletePlayer(false);
//   };

//   const handleCancelDelete = () => {
//     setShowDeletePlayer(false);
//   };

//   const handleEdit = (id) => {
//     const player = players.find((player) => player.id === id);
//     setCurrentPlayer(player);
//     setShowEditPlayer(true);
//   };

//   const editPlayer = (updatedPlayer) => {
//     const updatedPlayers = players.map((player) =>
//       player.id === updatedPlayer.id ? updatedPlayer : player
//     );
//     setPlayers(updatedPlayers);
//     setCurrentPlayer(null);
//     setShowEditPlayer(false);
//   };

//   const handleCancelEdit = () => {
//     setCurrentPlayer(null);
//     setShowEditPlayer(false);
//   };

//   const handleAddPlayer = () => {
//     setShowAddPlayer(true);
//   };

//   const addPlayer = (player) => {
//     const newPlayer = {
//       id: Math.floor(Math.random() * 1000),
//       ...player,
//     };
//     const updatedPlayers = [...players, newPlayer];
//     setPlayers(updatedPlayers);
//     setShowAddPlayer(false);
//   };

//   const handleCancelAdd = () => {
//     setShowAddPlayer(false);
//   };

//   return (
//     <div className="App">
//       <h1>Football Team</h1>
//       {showDeletePlayer ? (
//         <DeletePlayer
//           player={players.find((player) => player.id === playerToDelete)}
//           deletePlayer={deletePlayer}
//           onCancel={handleCancelDelete}
//         />
//       ) : showEditPlayer ? (
//         <EditPlayer
//           player={currentPlayer}
//           editPlayer={editPlayer}
//           onCancel={handleCancelEdit}
//         />
//       ) : showAddPlayer ? (
//         <AddPlayer addPlayer={addPlayer} onCancel={handleCancelAdd} />
//       ) : (
//         <PlayerList
//           players={players}
//           onDelete={handleDelete}
//           onEdit={handleEdit}
//           onAdd={handleAddPlayer}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// 3.

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import Create from './Create'
// import Update from './Update'
// import Read from './Read'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/create' element={<Create />}></Route>
//         <Route path='/update/:id' element={<Update />}></Route>
//         <Route path='/read/:id' element={<Read />}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// 4.

// import React, { useEffect, useState } from 'react'
// import axios, { Axios } from 'axios'

// const App = () => {

// useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>{
//     console.log(response.data)
//   })
//   .catch(console.log('err'))
// },[])


//   return (
//     <div>
//       <h1>API</h1>
//     </div>
//   )
// }

// export default App

// 5.

// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0);
//   const handleSubmit = () => setCount(count + 1);
//   return (
//     <div>
//       <h1>See the count : {count}</h1>
//       <button onClick={handleSubmit}>Add to Cart</button>
//     </div>
//   )
// }

// export default App

// 6.

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <label>
//         What you wanted : 
//         <select>
//           < option value='Low'>Low</option>
//           < option value='Normal'>Normal</option>
//           < option value='High'>High</option>
//         </select>
//       </label>
//     </div>
//   )
// }

// export default App

// 7.

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const jsonData = await response.json();
//         setUsers(jsonData);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const postData = async () => {
//     try {
//       const modifiedUsers = [...users];
//       modifiedUsers[0].id++;
//       const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(modifiedUsers[0])
//       });
//       const responseData = await response.json();
//       console.log('Data posted successfully:', responseData);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (users.length === 0) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div>
//         <h1>User ID: {users[0].id}</h1>
//         <button onClick={postData}>Increment and Post Data</button>
//       </div>
//     );
//   }
// };

// export default App;

import React from 'react'
import './Simple.css'

function App() {
  return (
    <div className='nav__div'>
      <h1>Project</h1>
      <ul>
        <li className='nav_center'>
          About
        </li>
        <li className='nav_center'>
          Services
        </li>
        <li className='nav_center'>
          Details
        </li>
      </ul>
      <div className='nav__button'>
      <button>Logout</button>
      </div>
    </div>
  )
}

export default App





















