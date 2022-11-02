import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "react-bootstrap/Navbar"

function App() {
  return (
    <>
      <Navbar fixed= "top"></Navbar>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><App /></>);