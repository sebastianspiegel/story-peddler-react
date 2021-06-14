import React from "react";
import {useHistory} from "react-router-dom"

export default function PlotEdit({story}){

    function plotPoints(){
        return story.plot_points.map( p =>
            <li key={p.id} className="list-group-item list-group-item-action">{p.description}
            <button className="badge bg-success">Edit</button>
            <button className="badge bg-danger">Delete</button>
            </li>
        )
    }

    let history = useHistory();
    
    return(
        <div>
            {plotPoints()}
            <button className="btn btn-outline-info" onClick={() => history.goBack()}>Return to Story</button>
        </div>
    )
}