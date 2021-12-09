import React from "react";
import DescriptionInput from "./descriptionInput"

const EducationDetailsInput = (props) => {

  return (
      <div className="inputContainer">
        <h2> Education </h2>
        {props.schoolList.map((school) => {
          return(
            <React.Fragment key={school.id}>
              <label> 
                  <div>
                  School Name
                  <button 
                      className="deleteButton"
                      data-schoolid={school.id}
                      onClick={props.deleteSchool}
                  > Delete School </button>
                  </div> 
              </label>
              <input
                  type="text"
                  name="schoolName" 
                  data-schoolid={school.id}
                  onChange={props.updateSchool}
              />
              <label> Start Date </label>
              <input
                  type="month"
                  name="start"
                  data-schoolid={school.id}
                  onChange={props.updateSchool}
              />
              <label> End Date </label>
              <div className="endDateInput"> 
                <input
                    type="month"
                    name="end"
                    data-schoolid={school.id}
                    onChange={props.updateSchool}
                />
                <div>
                    <input 
                        type="checkbox"
                        data-schoolid={school.id}
                        onClick={props.updatePresent}/>
                    <label> Present </label>
                </div>
              </div>
              <label> Course Title </label>
              <input
                  type="text"
                  name="course"
                  data-schoolid={school.id}
                  onChange={props.updateSchool}
              />
              <label> CAP </label>
              <input
                  type="text"
                  name="cap"
                  data-schoolid={school.id}
                  onChange={props.updateSchool}
              />    
              <DescriptionInput 
                  id={school.id} 
                  descriptionList={school.descriptionList} 
                  addDescription={props.addDescription} 
                  deleteDescription={props.deleteDescription}
                  updateDescription={props.updateDescription}/>
            </React.Fragment>  
            )})}
        <button className="addButton" onClick={props.addSchool}> Add school </button>
      </div>
  )
}

export default EducationDetailsInput