const EducationSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h3> EDUCATION </h3>
          {props.schoolList.map(school => {
            const startDate = new Date(school.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            const endDate = new Date(school.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            return(
              <div className="sectionItem" key={school.id}>
                <div className="itemHeader">
                  <b> {school.schoolName} </b>
                  <b className="dates"> 
                    {startDate} to {(school.present ? "Present" : endDate)}
                  </b>
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