import React from 'react';
import './App.css';
import Header from './MyComponent/Header';
import  './MyComponent/Style.css';
import Sidebar from './MyComponent/DashbordMenu';

const App =() => {
  return (
    <div className="App">
        <Header/>
        <Sidebar/>
    </div>
  );
};

export default App;
