export default function NewStory(props){
    return(
        <div>
            <fieldset>
                <legend>Add a new story</legend>
                <form>
                    Title: <input type="text" name="title" onChange={props.handleChange} /><br />
                    Genre: <input type="text" name="genre" onChange={props.handleChange} /><br />
                    Summary: <textarea class="form-control" name="summary" onChange={props.handleChange} rows="3" onChange={props.handleChange} /><br />
                    <input type="submit" value="Create New Story" />
                </form>
            </fieldset>
        </div>
    )
}