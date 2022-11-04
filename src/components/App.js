import React, { useEffect } from 'react'
import NavigationBar from './NavBar'
import "../style.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [load, updateLoad] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App' id={load? "no-scroll" : "scroll"}>
      <NavigationBar />
      <div style={{height: "70vh"}}></div>
      
    </div>
  )
}
