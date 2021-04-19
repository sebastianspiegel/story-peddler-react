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
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data
    })
    console.log("logged in")
  }

  handleLogout = () => {

    localStorage.clear()

    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3001/logged_in', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.handleLogin(data)
      })
    }
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <Header handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin} />
            </Route>
            <Route exact path='/signup' component={Signup} handleLogin={this.handleLogin} />
            <Route path="/stories" component={StoryContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
