import React from 'react'
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
        let userInfo = {
            user: {
                username: username,
                password: password,
                password_confirmation: password_confirmation
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInfo)
        }

        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.success){
                localStorage.setItem("token", json.jwt)
                this.props.handleLogin(json)
                this.setRedirect()
            } else {
                this.setState({
                    errors: json.erros
                })
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
                {this.renderRedirect()}
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