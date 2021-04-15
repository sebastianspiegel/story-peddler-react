export default function NewPlotPoint(props) {
    return(
        <div className="new-form">
            <form onSubmit={props.handleSubmit}>
                Description: <textarea name="desc" onChange={props.handleChange} rows="2"/><br/>
                Story: <select class="custom-select" name="story" onChange={props.handleChange}>
                    <option selected="">Select a story</option>
                </select><br/>
                <input className="btn btn-outline-primary" type="submit" value="Create Plot Point" />
            </form>
        </div>
    )
}