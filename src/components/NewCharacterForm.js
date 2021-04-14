export default function NewCharacter(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                Name: <input type="text" name="name" onChange={props.handleChange} /><br/>
                Description: <textarea name="desc" onChange={props.handleChange} rows="2"/><br/>
                <input type="submit" value="Create Character" />
            </form>
        </div>
    )
}