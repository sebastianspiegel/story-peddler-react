import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import Header from './components/Header'
import ShowStory from './components/Show-Story'
import StoryContainer from './containers/storycontainer'

export default class App extends React.Component{

  state = {
    isLoggedIn: false,
    user: {}
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
