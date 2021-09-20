import './App.css';
import './MyComponents/Style.css';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loginpage from './MyComponents/LoginLogoutpages/Loginpage';
import Forgatpassword from './MyComponents/LoginLogoutpages/Forgatpassword';
import Dashboard from './Dashboard';
import Page404 from './Page404';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Loginpage/>
        </Route>
        <Route exact path="/login" component={Loginpage}/>
        <Route exact path="/forgatpassword" component={Forgatpassword}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;
