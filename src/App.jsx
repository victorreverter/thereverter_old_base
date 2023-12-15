// App.js
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostDetailPage from './components/PostDetailPage';

const App = () => {
  return (
    <div className='App'>
    <h1>Hello World 2!</h1>
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" exact component={HomePage} />
    //     <Route path="/post/:postId" component={PostDetailPage} />
    //   </Routes>
    // </Router>
  );
};

export default App;

// import './App.css';
// import React from 'react';

// const App = () => {
//   return (
//     <div className='App'>
//       <h1>Hello World 2!</h1>
//     </div>
//   )
// }

// export default App