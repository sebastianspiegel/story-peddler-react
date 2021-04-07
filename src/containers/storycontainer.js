import React from "react";

export default class StoryContainer extends React.Component{

    getStories(){
        fetch("http://localhost:3000/stories")
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <div>
                {this.getStories()}
            </div>
        )
    }

}