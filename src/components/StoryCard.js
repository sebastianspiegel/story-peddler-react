import {useHistory} from 'react-router-dom';

export default function StoryCard(props){

    const history = useHistory()

    function handleClick(){
        history.push(`/stories/${props.story.id}`)
    }

    return(
        <div className="card" style={{ maxWidth: '40%' }} >
            <div className="card-body">
                <h4 className="card-title">{props.story.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.story.genre}</h6>
                <p className="card-text">{props.story.summary}</p>
                <button id={props.story.id} className="btn btn-primary" onClick={() => handleClick()}>View Story</button>
            </div>
        </div>
    )
}
