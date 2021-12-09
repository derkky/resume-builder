const EducationSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h2> Education </h2>
          {props.schoolList.map(school => {
            return(
              <div className="sectionItem" key={school.id}>
                <div className="itemHeader">
                  <h3> {school.schoolName} </h3>
                  <h3 className="dates"> 
                    {new Date(school.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})} to {new Date(school.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})}
                  </h3>
                </div>
                <div className="itemSubheader">
                  <span> {school.course} </span>
                </div>
                <div className="itemDescription">
                  <ul>
                    <li> {school.cap} </li>
                    {school.descriptionList.map(description => {
                      return(
                        <li key={description.id} data-descriptionid={description.id}> {description.text} </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

            )
          })}
          
        </div>
    )
}

export default EducationSection