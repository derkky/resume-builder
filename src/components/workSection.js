const WorkSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h2> Working Experience </h2>
          {props.workList.map(work => {
            return(
              <div className="sectionItem" key={work.id}>
                <div className="itemHeader">
                  <h3> {work.company} </h3>
                  <h3 className="dates"> 
                    {new Date(work.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})} to {new Date(work.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})}
                  </h3>
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