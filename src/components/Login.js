import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Redirect } from "react-router";

export default class Login extends React.Component{
    state = {
        username: '',
        password: '',
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
        const {username, password} = this.state
        let user = {
            username: username,
            password: password
        }
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(resp => {
            if (resp.data.logged_in){
                this.props.handleLogin(resp.data)
                this.redirect()
            } else {
                this.setState({
                    errors: resp.data.erros
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
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
                <input type="submit" value="Log In" />
                or <Link to='/signup'>Sign Up</Link>
                </form>
            </div>
        )
    }
}