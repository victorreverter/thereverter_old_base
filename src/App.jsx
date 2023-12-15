// App.js
// import './App.css';
// import React from 'react';

// const App = () => {
//   return (
//     <div className='App'>
//     <h1>Hello World 2!</h1>
//     </div>
//   );
// };

// export default App;

// =================================================================================

import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import ContactCompo from "./components/ContactCompo"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="contactCompo" element={ <ContactCompo/> } />
      </Routes>
    </div>
  )
}

export default App