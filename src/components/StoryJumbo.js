export default function StoryJumbo(props){

    function characters(){
        return props.story.characters.map( c => 
            <li key={c.id} className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    {c.name}
                </div>
                <p className="mb-1">{c.description}</p>
            </li>
        )
    }

    function plotpoints(){
        return props.story.plot_points.map( p =>
            <li key={p.id} className="list-group-item list-group-item-action">{p.description}</li>
        )
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
                {characters()}
            </ul>
            <br/>
            <div className="lead">
                <div className="list-group">
                    <ol id="plot-points">
                        <li className="list-group-item list-group-item-action active">Plot Points:</li>
                        {plotpoints()}
                    </ol>
                </div>
            </div>
            <br/>
            <button className="btn btn-outline-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
        </div>
    )

}