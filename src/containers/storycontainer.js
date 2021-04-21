import React from "react";
import StoryCard from '../components/StoryCard'

export default class StoryContainer extends React.Component{

    state = {
        stories: {},
        loaded: false 
    }

    getStories(){
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
        this.getStories()
        if (this.state.loaded) {
            this.state.stories.map(story => <StoryCard key={story.id}/>)
        }
    }

    render(){
        return(
            <div>
                <h3>My stories:</h3>
                {this.makeStoryCards()}
            </div>
        )
    }

}