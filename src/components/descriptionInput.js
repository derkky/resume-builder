const DescriptionInput = (props) => {
    return (
        <div className="descriptionInput">
            <label> Description </label>
            {props.descriptionList.map((description) => {
                return(
                <div key={description.id}>
                    <input type="text" 
                        className="descriptionTextInput" 
                        onChange={props.updateDescription}
                        data-parentid={props.id} 
                        data-descriptionid={description.id}/>
                    <button 
                        className="deleteButton" 
                        data-parentid={props.id} 
                        data-descriptionid={description.id} 
                        onClick={props.deleteDescription}> Delete</button>
                </div>
                )
            }
            )}
            <button className="addButton" data-parentid={props.id} onClick={props.addDescription}> Add Description </button>  
        </div>
    )
}

export default DescriptionInput