import React from "react";
import { Redirect } from "react-router";

export default class NewCharacter extends React.Component {

    state = {
        name: '',
        description: '',
        story_id: '',
        stories: '',
        errors: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        const userId = this.props.user.id 
        fetch(`http://127.0.0.1:3001/users/${userId}/stories`)
        .then(resp => resp.json())
        .then(json => 
            this.setState({
                stories: json,
                loaded: true
            })
        )
    }

    setStories(){
        if(this.state.loaded){
            return this.state.stories.data.map(s => <option name="story_id" value={s.id}>{s.attributes.title}</option>)
        }
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

        // fetch(`http://localhost:3001/characters`, configObj)
        // .then(resp => resp.json())
        // .then(json => {
        //     console.log(json)
        //     if (json.success){
        //         this.setRedirect()
        //     } else {
        //         alert(json.message)
        //     }
        // })
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
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                    Description: <textarea name="description" className="form-control" value={this.state.description} onChange={this.handleChange} rows="3"/><br/>
                    Story: <select className="custom-select" name="story_id" value={this.state.story_id} onChange={this.handleChange}>
                        <option defaultValue="">Select a story</option>
                        {this.setStories()}
                    </select><br/>
                    <input className="btn btn-outline-primary" type="submit" value="Create Character" />
                </form>
            </div>
        )
    }
}