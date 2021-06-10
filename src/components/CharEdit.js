import React from "react";

export default function CharEdit({story}){

    function characters(){
        return story.characters.map( c => 
            <li key={c.id} className="list-group-item flex-column align-items-start" >
                <div className="d-flex w-100 justify-content-between">
                    {c.name}
                </div>
                <p className="mb-1">{c.description}</p>
                <button className="badge bg-success">Edit</button>
                <button className="badge bg-danger">Delete</button>
            </li>
        )
    }

   
    return(
        <div>
            {characters()}
            <button className="btn btn-outline-info" onClick={() => console.log("back")}>Return to Story</button>
        </div>
    )
}