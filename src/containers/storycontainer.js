import React from "react";
import NewStory from '../components/New-Story'

export default class StoryContainer extends React.Component{

    getStories(){
        fetch("http://localhost:3000/stories")
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    handleChange = () => {

    }

    render(){
        return(
            <div>
                <NewStory handleChange={this.handleChange} />
            </div>
        )
    }

}