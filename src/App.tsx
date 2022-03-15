import React from 'react';
import './App.css';
import {Navbar} from './containers/Home/components/Navbar';
import {Search} from './containers/Home/components/Search';
import Routes from './state/Routes';

function App() {
  return (
    <div
      className="container-fluid"
      style={{background: '#383b40', height: '100vh'}}
    >
      <div className="row">
        <Navbar />
        <Routes />
        <Search />
      </div>
    </div>
  );
}

export default App;
