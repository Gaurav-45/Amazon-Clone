import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './components/Checkout';
import ImgSlider from './components/ImgSlider';
import Login from './components/Login';
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider"

function App() {

  const[{}, dispatch]=useStateValue();

  //will run only once when <APP> renders
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser)

      if(authUser){
        //User just logged in/ user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
