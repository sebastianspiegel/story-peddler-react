import React from "react";
import { Redirect } from "react-router";

export default class NewPlotPoint extends React.Component{

    state = {
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
        // need to deal with if there are no stories belonging to user 
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
            return this.state.stories.data.map(s => <option key={s.id} name="story_id" value={s.id}>{s.attributes.title}</option>)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {description, story_id} = this.state
        
        let plotPointInfo = {
            plot_point: {
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
            body: JSON.stringify(plotPointInfo)
        }
        console.log(plotPointInfo)
        console.log(configObj)

        fetch(`http://localhost:3001/plot_points`, configObj)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json)
            if (json.success){
                alert(json.message)
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
                    Description: <textarea name="description" value={this.state.description} onChange={this.handleChange} rows="3"/><br/>
                    Story: <select className="custom-select" name="story_id" value={this.state.story_id} onChange={this.handleChange}>
                        <option defaultValue="">Select a story</option>
                        {this.setStories()}
                    </select><br/>
                    <input className="btn btn-outline-primary" type="submit" value="Create Plot Point" />
                </form>
            </div>
        )
    }
}