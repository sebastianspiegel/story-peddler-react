export default class NewStory{

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
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {title, genre, summary} = this.state
        let storyInfo = {
            story: {
                title: title,
                genre: genre,
                summary: summary,
                user_id: this.props.user.id 
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

        // fetch(`http://localhost:3001/users/${id}/stories`, configObj)
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