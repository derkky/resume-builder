import DescriptionInput from "./descriptionInput"

const AddInfoInput = (props) =>{
    return(
        <div className="inputContainer">
          <h2> Additional Information </h2>
          <DescriptionInput
           descriptionList={props.descriptionList} 
           addDescription={props.addDescription} 
           deleteDescription={props.deleteDescription}
           updateDescription={props.updateDescription}/>
        </div>
    )
}

export default AddInfoInput