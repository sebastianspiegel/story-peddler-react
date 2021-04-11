import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component{
    state = {
        username: '',
        password: '',
        password_confirmation: '',
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
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username: <input type="text" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" value={this.state.password} onChange={this.handleChange} />
                    Confirm Password: <input type="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}