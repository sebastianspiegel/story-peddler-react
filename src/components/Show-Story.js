import React from "react"
import StoryJumbo from './StoryJumbo'

export default class ShowStory extends React.Component{

    state = {
        story: {},
        loaded: false 
    }


    componentDidMount(){
        let storyId = this.props.match.params.id
        fetch(`http://127.0.0.1:3001/stories/${storyId}`)
        .then(resp => resp.json())
        .then(json => 
            // if 404 show "story does not exist"
            // if (json.error){
            //     this.setState({
            //         loaded: false
            //     })
            // } else {
                this.setState({
                    story: json,
                    loaded: true
                })
            // }
        )
    }

    showStory(){
        if (this.state.loaded) {
            return <StoryJumbo story={this.state.story} handleDelete={this.handleDelete}/>
        } else {
            return <h2>Loading...</h2>
        }
    }

    handleDelete = () => {
        console.log("delete")
    }

    render(){
        return(
            <div>
                {this.showStory()}
            </div>
        )
    }
}