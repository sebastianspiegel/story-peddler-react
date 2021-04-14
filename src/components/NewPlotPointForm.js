export default function NewPlotPoint(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                Description: <textarea name="desc" onChange={props.handleChange} rows="2"/><br/>
                Story: <select class="custom-select" name="story" onChange={props.handleChange}>
                    <option selected="">Select a story</option>
                </select><br/>
                <input type="submit" value="Create Plot Point" />
            </form>
        </div>
    )
}