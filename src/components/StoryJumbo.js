export default function StoryJumbo(props){

    function characters(){
        props.story.characters.map( c => <h5 className="mb-1">${c.name}</h5>)
    }

    return(
        <div className="jumbotron">
            {console.log(props)}
            <div className="storyInfo">
                <h1 className="display-3">{props.story.title}</h1>
                <h6>{props.story.genre}</h6>
                <h5>{props.story.summary}</h5>
            </div>
            <hr className="my-4" />
            <p>Characters:</p>
            <ul className="list-group" >
                <li className="list-group-item flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        {characters()}
                    </div>
                    <p className="mb-1">Character description here</p>
                </li>
            </ul>
            <div className="lead">
                <div className="list-group">
                    <ol id="plot-points">
                        <li className="list-group-item list-group-item-action active">Plot Points:</li>
                    </ol>
                </div>
            </div>
            <button className="btn btn-outline-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
        </div>
    )

}