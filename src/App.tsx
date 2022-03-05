import React from 'react';
import './App.css';
import { Home } from './containers/Home/Home';
import { Main } from './containers/Home/components/Main';
import { Navbar } from './containers/Home/components/Navbar';
import { Search } from './containers/Home/components/Search';


function App() {
  return (
    <div className="container-fluid" style={{ background: "red", height: "100vh" }}>
      <div className="row">
        <div className="container" style={{ background: "blue", height: "100vh" }}>
          <Home />
          <Main />
          <Navbar />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
