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
import AddServices from './components/Admin/AddServices/AddServices';
import Review from './components/Customar/Review/Review';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Customar/ServiceList/ServiceList';
import NotFound from './components/NotFound/NotFound';
import AllServices from './components/Admin/AllServices/AllServices';
import Sidebar from './components/Shared/Sidebar/Sidebar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path='/'> <Home /> </Route>

          <Route path='/login'> <Login /> </Route>

          {/* <PrivateRoute path='/customar/:serviceId'> <Customar /> </PrivateRoute> */}
          <Route path='/customar/:serviceId'> <Customar /> </Route>

          <PrivateRoute path='/order/:orderId'> <OrderForm /> </PrivateRoute>

          <PrivateRoute path='/addService'> <AddServices /> </PrivateRoute>

          <PrivateRoute path='/review'> <Review /> </PrivateRoute>

          <PrivateRoute path='/makeAdmin'> <MakeAdmin /> </PrivateRoute>

          <PrivateRoute path='/serviceList'> <ServiceList /> </PrivateRoute>

          <PrivateRoute path='/allServices'> <AllServices /> </PrivateRoute>

          <Route path='/allServices'> <AllServices /> </Route>

          {/* <PrivateRoute path='/sidebar'> <Sidebar /> </PrivateRoute> */}

          {/* <Route path='/sidebar'><Sidebar /></Route> */}

          <Route path='*'> <NotFound /> </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
