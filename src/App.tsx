import React from 'react';
import './App.css';
import { Home } from './containers/Home/Home';

function App() {
  return (
    <div className="container-fluid" style={{ background: "#383b40", height: "100vh" }}>
      <Home />
    </div>
  );
}

export default App;
