import React from "react";
import NewStory from '../components/New-Story'

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
        if (this.state.loaded) {
            
        }
    }

    render(){
        return(
            <div>
                {this.getStories()}
            </div>
        )
    }

}