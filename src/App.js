import React from 'react';
import './App.css';
import  './MyComponent/Style.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Loginform from './Login';
import Adminpanel from './Adminpanel';

const App =() => {
  return (
     <>
     <Switch>
          <Route exat path="/" component={Loginform}/>
    </Switch>
    </>
  );
};

export default App;
