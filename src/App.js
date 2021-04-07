import './App.css';
import Header from './components/Header'
import ShowStory from './components/Show-Story'
import StoryContainer from './containers/storycontainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <StoryContainer />
      {/* <ShowStory/> */}
    </div>
  );
}

export default App;
