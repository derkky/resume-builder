const AddInfoSection = (props) => {
    return(
        <div className="addInfoSection">
            <h3> ADDITIONAL INFORMATION </h3>
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