import './App.css';
import React from 'react';
import { Redirect } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import ShowStory from './components/Show-Story'
import StoryContainer from './containers/storycontainer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import NewStory from './components/New-Story'
import NewCharacter from './components/NewCharacterForm'
import NewPlotPoint from './components/NewPlotPointForm'

export default class App extends React.Component{

  state = {
    isLoggedIn: false,
    user: {}
  }

  home(){
    if (this.state.isLoggedIn === false){
      return <Home />
    } else {
      return <StoryContainer user={this.state.user}/>
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data
    })

  }

  handleLogout = () => {

    localStorage.clear()

    this.setState({
      isLoggedIn: false,
      user: {}
    })

    this.setRedirect()

    //need to clear state in storycontainer 
  }

  setRedirect = () => {
    this.setState({
        ...this.state,
        redirect: true
    })
  }

  renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
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
        this.handleLogin(data)
      })
    }
  }

  render(){
    return(
      <div>
        <BrowserRouter>
        {this.renderRedirect()}
          <Header handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
          
          <Switch>
            <Route exact path='/'>
              {this.home()}
            </Route>
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin} />
            </Route>
            <Route exact path='/signup'>
              <Signup handleLogin={this.handleLogin} />
            </Route>
            <Route exact path="/stories/new">
              <NewStory user={this.state.user}/>
            </Route>
            <Route path="/stories/:id" component={ShowStory} />
            <Route exact path='/characters/new'>
              <NewCharacter user={this.state.user} />
            </Route>
            <Route exact path ='/plotpoints/new'>
              <NewPlotPoint user={this.state.user} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
