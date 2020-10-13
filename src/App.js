import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Customar from './components/Customar/Customar/Customar';
import OrderForm from './components/Customar/OrderForm/OrderForm';
import AddServices from './components/Customar/AddServices/AddServices';
import Review from './components/Customar/Review/Review';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/customar'>
            <Customar/>
          </Route>
          <Route path='/order'>
            <OrderForm/>
          </Route>
          <Route path='/addService'>
            <AddServices/>
          </Route>
          <Route path='/review'>
            <Review/>
          </Route>
          <Route path='/makeAdmin'>
            <MakeAdmin/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
