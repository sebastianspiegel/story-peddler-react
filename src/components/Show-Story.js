export default function ShowStory(){
    return(
        <div className="jumbotron">
            <div className="storyInfo">
                <h1 className="display-3">Story Title Here</h1>
                <h6>Genre here</h6>
                <h5>Summary here.</h5>
            </div>
            <hr className="my-4" />
            <p>Characters:</p>
            <ul className="list-group" >
                <li className="list-group-item flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Character 1</h5>
                    </div>
                    <p className="mb-1">Character description here</p>
                </li>
            </ul>
            <p className="lead">
                <div className="list-group">
                    <ol id="plot-points">
                        <li className="list-group-item list-group-item-action active">Plot Points:</li>
                    </ol>
                </div>
            </p>
            <button className="btn btn-outline-primary">Edit</button>
            <button className="btn btn-outline-danger">Delete</button>
        </div>
    )
}