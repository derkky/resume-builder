const PersonalDetailsInput = (props) => {
    return (
        <div className="inputContainer">
          <h2> Personal Details </h2>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            onChange={props.updatePersonalInfo}
          />
          <label htmlFor="phoneNumber"> Phone Number </label>
          <input
            type="text"
            name="phoneNumber"
            onChange={props.updatePersonalInfo}
          />
          <label htmlFor="email"> Email </label>
          <input
            type="text"
            name="email"
            onChange={props.updatePersonalInfo}
          />
          <label htmlFor="website"> Website </label>
          <input
            type="text"
            name="website"
            onChange={props.updatePersonalInfo}
          />
        </div>
    )
}

export default PersonalDetailsInput