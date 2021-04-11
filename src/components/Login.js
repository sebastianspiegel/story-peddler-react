import React from "react";


// export default function LoginForm(){
//     <form>
//     Name: <input type="text"/>
//     Password: <input type="password" />
//     <input type="submit" />
// </form>
// }

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
    }

    render(){
        <div>
            <form onSubmit={this.handleSubmit}>
            Username: <input type="text" value={this.state.username} onChange={this.handleChange} />
            Password: <input type="password" value={this.state.password} onChange={this.handleChange} />
            <input type="submit" value="Log In" />
            or <Link to='/signup'>Sign Up</Link>
            </form>
        </div>
    }
}