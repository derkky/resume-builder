const CcaSection = (props) => {
    return(
        <div className="sectionWithItems">
          <h3> CO-CURRICULAR ACTIVITIES </h3>
          {props.ccaList.map(cca => {
            const startDate = new Date(cca.start).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            const endDate = new Date(cca.end).toLocaleDateString("en-us", {year:"numeric", month:"short"})
            return(
              <div className="sectionItem" key={cca.id}>
                <div className="itemHeader">
                  <b> {cca.organisation} </b>
                  <b className="dates"> 
                    {startDate} to {(cca.present ? "Present" : endDate)}
                  </b>
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