export default function NewStory(props){
    return(
        <div className="new-form">
            <fieldset>
                <legend>Add a new story</legend>
                <form>
                    Title: <input type="text" name="title" onChange={props.handleChange} /><br />
                    Genre: <input type="text" name="genre" onChange={props.handleChange} /><br />
                    Summary: <textarea class="form-control" name="summary" onChange={props.handleChange} rows="3" onChange={props.handleChange} /><br />
                    <input className="btn btn-outline-primary" type="submit" value="Create New Story" />
                </form>
            </fieldset>
        </div>
    )
}