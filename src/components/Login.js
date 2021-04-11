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
    }

    redirect = () => {
        this.props.history.push('/')
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
                Username: <input type="text" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Log In" />
                or <Link to='/signup'>Sign Up</Link>
                </form>
            </div>
        )
    }
}