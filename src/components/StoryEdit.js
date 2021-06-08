import React from "react"
import { Redirect } from "react-router";

export default class StoryEdit extends React.Component{

    state = {
        title: this.props.story.title,
        genre: this.props.story.genre,
        summary: this.props.story.summary,
        errors: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {title, genre, summary, id} = this.state
        
        let storyInfo = {
            story: {
                title: title,
                genre: genre,
                summary: summary,
                id: id
            }
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(storyInfo)
        }

        fetch(`http://localhost:3001/stories/${this.props.story.id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.success){
                this.setRedirect(json.story.id)
            } else {
                alert(json.message)
            }
        })
    }

    // currently rendering just form for story information
    // add in characters and plot points with edit buttons
    // break down into seperate components? 

    setRedirect = (id) => {
        this.setState({
            ...this.state,
            redirect: true,
            story_id: id
        })
    }

    renderRedirect = () => {
        const id = this.state.story_id
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    render(){
        return(
            <div className="new-form">
                {this.renderRedirect()}
                <fieldset>
                    <legend>Add a new story</legend>
                    <form onSubmit={this.handleSubmit}>
                        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
                        Genre: <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} /><br />
                        Summary: <textarea className="form-control" name="summary" value={this.state.summary} onChange={this.handleChange} rows="3" /><br />
                        <input className="btn btn-outline-primary" type="submit" value="Save Story" />
                    </form>
                </fieldset>
            </div>
        )
    }
}