const WorkSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h3> WORKING EXPERIENCE </h3>
          {props.workList.map(work => {
            const startDate = new Date(work.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            const endDate = new Date(work.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            return(
              <div className="sectionItem" key={work.id}>
                <div className="itemHeader">
                  <b> {work.company} </b>
                  <b className="dates"> 
                    {startDate} to {work.present ? "Present" : endDate}
                  </b>
                </div>
                <div className="itemSubheader">
                  <span> {work.jobTitle} </span>
                </div>
                <div className="itemDescription">
                  <ul>
                    {work.descriptionList.map(description => {
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

export default WorkSection