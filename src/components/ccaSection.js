const CcaSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h2> Co-Curricular Activities </h2>
          {props.ccaList.map(cca => {
            return(
              <div className="sectionItem" key={cca.id}>
                <div className="itemHeader">
                  <h3> {cca.organisation} </h3>
                  <h3 className="dates"> 
                  {new Date(cca.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})} to {new Date(cca.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})}
                  </h3>
                </div>
                <div className="itemSubheader">
                  <span> {cca.position} </span>
                </div>
                <div className="itemDescription">
                  <ul>
                    {cca.descriptionList.map(description => {
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

export default CcaSection