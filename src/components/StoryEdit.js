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
        console.log(this.state)
    }

    render(){
        return(
            <div className="new-form">
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