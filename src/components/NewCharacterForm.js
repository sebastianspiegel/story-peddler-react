import React from "react";
import { Redirect } from "react-router";

export default class NewCharacter extends React.Component {

    state = {
        name: '',
        description: '',
        story: '',
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
        const {name, description, story_id} = this.state
        
        let characterInfo = {
            story: {
                name: name,
                description: description,
                story_id: story_id
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(characterInfo)
        }
        console.log(characterInfo)
        console.log(configObj)

        fetch(`http://localhost:3001/characters`, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.success){
                this.setRedirect()
            } else {
                alert(json.message)
            }
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
            <div className="new-form">
                {this.renderRedirect()}
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" value={this.state.name} onChange={this.handleChange} /><br/>
                    Description: <textarea className="form-control" value={this.state.description} onChange={this.handleChange} rows="3"/><br/>
                    Story: <select className="custom-select" name="story" value={this.state.story_id}>
                        <option defaultValue="">Select a story</option>
                    </select><br/>
                    <input className="btn btn-outline-primary" type="submit" value="Create Character" />
                </form>
            </div>
        )
    }
}