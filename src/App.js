import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import ShowStory from './components/Show-Story'
import StoryContainer from './containers/storycontainer'

function App() {

  const [token, setToken] = useState();

  return (
    <div className="App">
      <Header/>
      <StoryContainer />
      {/* <ShowStory/> */}
    </div>
  );
}

export default App;
