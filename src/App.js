import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import ShowStory from './components/Show-Story'
import StoryContainer from './containers/storycontainer'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Home from './components/Home'

export default class App extends React.Component{

  state = {
    isLoggedIn: false,
    user: {}
  }

  componentDidMount() {
    // this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    fetch('http://localhost:3001/logged_in')    
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
        console.log("logged in")
      } else {
        this.handleLogout()
        console.log("logged out")
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/login' component={Login} /> */}
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin} />
            </Route>
            <Route exact path='/signup' component={Signup} />
            <Route path="/stories" component={StoryContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
