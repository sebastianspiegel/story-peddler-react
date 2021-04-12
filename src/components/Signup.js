import React from 'react'
import axios from 'axios'
import { Redirect } from "react-router";

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
        const {username, password, password_confirmation} = this.state
        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(resp => {
            if (resp.data.status === 'created'){
                this.props.handleLogin(resp.data)
                this.redirect()
            } else {
                this.setState({
                    errors: resp.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
        this.setRedirect()
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


    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.erros.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                    Confirm Password: <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} /><br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}