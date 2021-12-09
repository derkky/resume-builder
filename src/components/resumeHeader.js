const ResumeHeader = (props) => {
    return(
        <div className="resumeHeader">
          <h1>{props.personalInfo.name}</h1>
          <span>{props.personalInfo.phoneNumber}</span>
          <span>{props.personalInfo.email}</span>
          <span>{props.personalInfo.website}</span>
        </div>
    )
}

export default ResumeHeader