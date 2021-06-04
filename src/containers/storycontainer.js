import React from "react";
import StoryCard from '../components/StoryCard'

export default class StoryContainer extends React.Component{

    state = {
        stories: {},
        loaded: false 
    }

    componentDidMount(){
        // needs turnary for when trying to fetch before getting props
        let userId = this.props.user.id
        fetch(`http://127.0.0.1:3001/users/${userId}`)
        .then(resp => resp.json())
        .then(json => 
            // console.log(json)
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

    render(){
        return(
            <div>
                {this.makeStoryCards()}
            </div>
        )
    }

}