export default function StoryCard(props){
    return(
        <div className="card" style={{ maxWidth: '40%' }} >
            <div className="card-body">
                <h4 className="card-title">{props.story.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.story.genre}</h6>
                <p className="card-text">{props.story.summary}</p>
                <button storyId={props.story.id} className="btn btn-primary" onClick={props.handleClick}>View Story</button>
            </div>
        </div>
    )
}
