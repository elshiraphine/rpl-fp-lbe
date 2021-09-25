import React from 'react';
import Routes from './routes';
import './css/App.css';
import Navbar from './component/Navbar';
//import Card from './component/Card';
import Cardcontainer from './component/Cardcontainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cardcontainer />
      <Routes />
    </div>
  );
}

export default App;
