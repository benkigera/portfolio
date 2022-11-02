import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"

function App() {
  return (
    <>
      <Navbar fixed= "top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><App /></>);