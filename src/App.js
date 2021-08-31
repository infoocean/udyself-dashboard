import React from 'react';
import './App.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import NavSidebar from './NavSidebar';

const App =() => {
  return (
     <>
     {/*header part*/}
     <Header/>
     {/*side bar part with main part content**/}
     <NavSidebar/>
    </>
  );
};

export default App;
