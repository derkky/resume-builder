import DescriptionInput from "./descriptionInput"
import React from "react"

const CcaDetailsInput = (props) => {
    return(
        <div className="inputContainer">
          <h2> Co-Curricular Activities </h2>
          {props.ccaList.map(cca => {
            return(
              <React.Fragment key={cca.id}>
                <label> 
                <div>
                  Organisation
                  <button 
                    className="deleteButton"
                    data-ccaid={cca.id}
                    onClick={props.deleteCca}
                  > Delete CCA </button>
                </div> 
                </label>
                <input
                  type="text"
                  name="organisation"
                  data-ccaid={cca.id}
                  onChange={props.updateCca}
                />
                <label> Position </label>
                <input
                  type="text"
                  name="position"
                  data-ccaid={cca.id}
                  onChange={props.updateCca}
                />
                <label> Start Date </label>
                <input
                  type="month"
                  name="start"
                  data-ccaid={cca.id}
                  onChange={props.updateCca}
                />
                <label> End Date </label>
                <input
                  type="month"
                  name="end"
                  data-ccaid={cca.id}
                  onChange={props.updateCca}
                />
                <DescriptionInput
                  id={cca.id}
                  descriptionList={cca.descriptionList}
                  addDescription={props.addDescription} 
                  deleteDescription={props.deleteDescription}
                  updateDescription={props.updateDescription}/>
              </React.Fragment>
            )
          })}
          

          <button className="addButton" onClick={props.addCca}> Add CCA </button>
        </div>
    )
}

export default CcaDetailsInput