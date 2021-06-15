import React from "react"
import StoryJumbo from './StoryJumbo'
import { Redirect } from "react-router";
import StoryEdit from './StoryEdit'
import CharEdit from './CharEdit'
import PlotEdit from './PlotEdit'

export default class ShowStory extends React.Component{

    state = {
        story: {},
        loaded: false,
        editingStory: false,
        editingChar: false,
        editingPlot: false 
    }


    componentDidMount(){
        let storyId = this.props.match.params.id
        fetch(`http://127.0.0.1:3001/stories/${storyId}`)
        .then(resp => resp.json())
        .then(json => 
            // if 404 show "story does not exist"
            // if (json.error){
            //     this.setState({
            //         loaded: false
            //     })
            // } else {
                this.setState({
                    story: json,
                    loaded: true
                })
            // }
        )
    }

    showStoryJumbo(){
        // move logic to render 
        if (this.state.editingStory) {
            return <StoryEdit story={this.state.story} />
        } else if (this.state.editingChar) {
            return <CharEdit story={this.state.story} />
        } else if (this.state.editingPlot) {
            return <PlotEdit story={this.state.story} />
        } else if (this.state.loaded) {
            return <StoryJumbo story={this.state.story} 
            handleDelete={this.handleDelete} 
            handleStoryEdit={this.handleEdit} 
            handleCharEdit={this.handleCharEdit}
            handlePlotEdit={this.handlePlotEdit}/>
        } else {
            return <h2>Loading...</h2>
        }
    }

    handleDelete = () => {
        const id = this.state.story.id
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`http://localhost:3001/stories/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => 
            alert(json.message)
            )
        this.setRedirect()
        //redirect still shows story until refreshed 
        //need to update state in story container 
    }

    handleStoryEdit = () => {
        console.log("story info edit")
        this.setState({
            ...this.state,
            editingStory: true
        })
    }

    handleCharEdit = () => {
        console.log("character edit")
        this.setState({
            ...this.state,
            editingChar: true
        })
    }

    handlePlotEdit = () => {
        console.log("plot point edit")
        this.setState({
            ...this.state,
            editingPlot: true 
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
            <div>
                {this.renderRedirect()}
                {this.showStoryJumbo()}
            </div>
        )
    }
}