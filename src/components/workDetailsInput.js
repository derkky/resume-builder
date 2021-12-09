import React from "react"
import DescriptionInput from "./descriptionInput"

const WorkDetailsInput = (props) => {
    return(
        <div className="inputContainer">
          <h2> Working Experience </h2>
          {props.workList.map(work => {
            return(
              <React.Fragment key={work.id}>
                <label> 
                <div>
                  Company
                  <button 
                    className="deleteButton"
                    data-workid={work.id}
                    onClick={props.deleteWork}
                  > Delete Work </button>
                </div> 
                </label>
                <input
                  type="text"
                  name="company"
                  data-workid={work.id}
                  onChange={props.updateWork}
                />
                <label> Job Title </label>
                <input
                  type="text"
                  name="jobTitle"
                  data-workid={work.id}
                  onChange={props.updateWork}
                />
                <label> Start Date </label>
                <input
                  type="month"
                  name="start"
                  data-workid={work.id}
                  onChange={props.updateWork}
                />
                <label> End Date </label>
                <div className="endDateInput"> 
                <input
                    type="month"
                    name="end"
                    data-workid={work.id}
                    onChange={props.updateWork}
                />
                <div>
                    <input 
                        type="checkbox"
                        data-workid={work.id}
                        onClick={props.updatePresent}/>
                    <label> Present </label>
                </div>
              </div>
                <DescriptionInput
                  id={work.id}
                  descriptionList={work.descriptionList}
                  addDescription={props.addDescription} 
                  deleteDescription={props.deleteDescription}
                  updateDescription={props.updateDescription}/>
              </React.Fragment>
            )
          })}
          

          <button className="addButton" onClick={props.addWork}> Add Work </button>
        </div>
    )
}

export default WorkDetailsInput