import React from "react";
import StoryCard from '../components/StoryCard'
import ShowStory from '../components/Show-Story'

export default class StoryContainer extends React.Component{

    state = {
        stories: {},
        loaded: false 
    }

    componentDidMount(){
        let userId = this.props.user.id
        fetch(`http://127.0.0.1:3001/users/${userId}`)
        .then(resp => resp.json())
        .then(json => 
            this.setState({
                stories: json.stories,
                loaded: true
            })
        )
    }

    makeStoryCards(){
        if (this.state.loaded) {
            return this.state.stories.map(story => <StoryCard key={story.id} story={story} handleClick={this.handleClick}/>)
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        let storyId = e.target.id
        let story = this.state.stories.find(story => story.id == storyId)
        console.log(story)
        return <ShowStory story={story} />
        // onclick render story show page 
    }

    render(){
        return(
            <div>
                {this.makeStoryCards()}
            </div>
        )
    }

}