import React from "react"
import { Redirect } from "react-router";

export default class NewStory extends React.Component{

    state = {
        title: '',
        genre: '',
        summary: '',
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
        const {title, genre, summary} = this.state
        const user_id = this.props.user.id
        
        let storyInfo = {
            story: {
                title: title,
                genre: genre,
                summary: summary,
                user_id: user_id
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(storyInfo)
        }
        console.log(storyInfo)
        console.log(configObj)

        fetch(`http://localhost:3001/users/${user_id}/stories`, configObj)
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
                        <input className="btn btn-outline-primary" type="submit" value="Create New Story" />
                    </form>
                </fieldset>
            </div>
        )
    }
}