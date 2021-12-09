const AddInfoSection = (props) => {
    return(
        <div className="addInfoSection">
            <h2> Additional Info </h2>
            <div className="itemDescription">
                <ul>
                    {props.addInfoList.map(info => {
                        return(
                            <li key={info.id} data-descriptionid={info.id}> {info.text} </li>
                        )})}
                </ul>
            </div>
        </div>
    )
}

export default AddInfoSection