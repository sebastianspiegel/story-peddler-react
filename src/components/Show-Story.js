import React from "react"
import StoryJumbo from './StoryJumbo'
import { Redirect } from "react-router";
import StoryEdit from './StoryEdit'

export default class ShowStory extends React.Component{

    state = {
        story: {},
        loaded: false,
        editing: false 
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

    showStoryJumbo(){
        if (this.state.editing) {
            return <StoryEdit story={this.state.story} />
        } else if (this.state.loaded) {
            return <StoryJumbo story={this.state.story} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        } else {
            return <h2>Loading...</h2>
        }
    }

    handleDelete = () => {
        //need confirmation!! 
        const id = this.state.story.id
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`http://localhost:3001/stories/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => 
            alert(json.message)
            )
        this.setRedirect()
        //redirect still shows story until refreshed 
    }

    handleEdit = () => {
        console.log("edit")
        this.setState({
            ...this.state,
            editing: true
        })
    }

    setRedirect = () => {
        this.setState({
            ...this.state,
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                {this.showStoryJumbo()}
            </div>
        )
    }
}