import React from 'react';
import './App.css';
import {Navbar} from './containers/Navbar/Navbar';
import {Search} from './containers/Search/Search';
import Routes from './state/Routes';

function App() {
  return (
    <div className="container-fluid" style={{background: '#383b40'}}>
      <div className="row">
        <Routes />
      </div>
    </div>
  );
}

export default App;
