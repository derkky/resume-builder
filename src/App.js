import React, { useState } from "react";
import "./styles/styles.css"
import PersonalDetailsInput from "./components/personalDetailsInput.js"
import EducationDetailsInput from "./components/educationDetailsInput.js"
import WorkDetailsInput from "./components/workDetailsInput.js"
import AddInfoInput from "./components/addInfoInput.js"
import uniqid from "uniqid"
import ResumeHeader from "./components/resumeHeader";
import EducationSection from "./components/educationSection"
import CcaDetailsInput from "./components/ccaDetailsInput";
import update from "immutability-helper"
import WorkSection from "./components/workSection";
import CcaSection from "./components/ccaSection";
import AddInfoSection from "./components/addInfoSection";

const App = () => {

  const [personalInfo, setPersonalInfo] = useState({
    name: "Jamie Tan",
    phoneNumber: "8888-0654",
    email: "jamie.tan@u.nus.edu",
    website: "linkedin.com/in/jamie-tan"})

    const updatePersonalInfo = (ev) => {
      const value = ev.target.value
      setPersonalInfo({
        ...personalInfo,
        [ev.target.name]: value
      })
    }

  const [educationInfo, setEducationInfo] = useState(
    [{schoolName:"National University of Singapore", 
    id: uniqid(), 
    start: "Aug 2013",
    end: "May 2017",
    course: "Bachelor of Arts, Major in Global Affairs",
    cap: "CAP: 4.5/5 (First Class Honours)",
    descriptionList: [{id:uniqid(), text:"Recipient of NUS Dean Scholarship, a merit based scholarship awarded for four years"}]}]
  )

 
  const addSchool = () => {
    setEducationInfo([
      ...educationInfo, {
        schoolName:"New School", 
        id: uniqid(), 
        start: Date.now(),
        end: Date.now(),
        course: "Course Name",
        cap: "CAP: ",
        descriptionList: [{id:uniqid(), text:"Description"}]}
    ])
  }
  
  const deleteSchool = (ev) => {
    setEducationInfo(
      educationInfo.filter(school => school.id !== ev.target.dataset.schoolid)
    )
  }

  const addSchoolDescription = (ev) => {
    const index = educationInfo.findIndex(school => school.id === ev.target.dataset.parentid)

    setEducationInfo(
      update(educationInfo, {
        [index] : {
          descriptionList : {$push: [{id:uniqid(), text:"Description"}]}
        }
      })
    )
  }

  const deleteSchoolDescription = (ev) => {
    const index = educationInfo.findIndex(school => school.id === ev.target.dataset.parentid)

    setEducationInfo(
      update(educationInfo, {
        [index] : {
          descriptionList : {$set: educationInfo[index].descriptionList.filter(description => description.id !== ev.target.dataset.descriptionid)}
        }
      })
    )
  }

  const updateSchool = (ev) => {
    const index = educationInfo.findIndex(school => school.id === ev.target.dataset.schoolid)

    setEducationInfo(
      update(educationInfo, {
        [index] : {
          [ev.target.name] : {$set: ev.target.value}
        }
      })
    )
  }

 const updateSchoolDescription = (ev) => {
    const index = educationInfo.findIndex(school => school.id === ev.target.dataset.parentid)
    const descripIndex = educationInfo[index].descriptionList.findIndex(description => description.id === ev.target.dataset.descriptionid)
    setEducationInfo(
      update(educationInfo, {
        [index] : {
          descriptionList : {
            [descripIndex] : {
              text: {$set: ev.target.value}
            }
          }
        }
      })
    )
  }

  const [workInfo, setWorkInfo] = useState(
    [{company:"Samsung Electronics", 
    id: uniqid(), 
    start: "Jun 2015",
    end: "Jul 2015",
    jobTitle: "Global Launching Strategy Team Intern",
    descriptionList: [
      {id:uniqid(), 
      text:"Led cross-functional team to produce a video project of techniques to sales representatives in Southeast Asia by writing a script, producing the content, and preparing a presentation."},
      {id:uniqid(),
      text:"Developed design concepts, product mottos, and copyrighted descriptions to endorse the upcoming line of Flat Panel TVs by designing new product sales guides and training packets."}]}]
  )


  const addWork = () => {
    setWorkInfo([
      ...workInfo, {
        company: "Company",
        id: uniqid(),
        start: Date.now(),
        end: Date.now(),
        jobTitle: "Position",
        descriptionList: [{id:uniqid(), text:"Description"}]
      }
    ])
  }
 
  const deleteWork = (ev) => {
    setWorkInfo(
      workInfo.filter(work => work.id !== ev.target.dataset.workid)
    )
  }

  const addWorkDescription = (ev) => {
    const index = workInfo.findIndex(work => work.id === ev.target.dataset.parentid)

    setWorkInfo(
      update(workInfo, {
        [index] : {
          descriptionList : {$push: [{id:uniqid(), text:"Description"}]}
        }
      })
    )
  }

  const deleteWorkDescription = (ev) => {
    const index = workInfo.findIndex(work => work.id === ev.target.dataset.parentid)

    setWorkInfo(
      update(workInfo, {
        [index] : {
          descriptionList : {$set: workInfo[index].descriptionList.filter(description => description.id !== ev.target.dataset.descriptionid)}
        }
      })
    )
  }

  const updateWork = (ev) => {
    const index = workInfo.findIndex(work => work.id === ev.target.dataset.workid)

    setWorkInfo(
      update(workInfo, {
        [index] : {
          [ev.target.name] : {$set: ev.target.value}
        }
      })
    )
  }

 const updateWorkDescription = (ev) => {
    const index = workInfo.findIndex(work => work.id === ev.target.dataset.parentid)
    const descripIndex = workInfo[index].descriptionList.findIndex(description => description.id === ev.target.dataset.descriptionid)
    setWorkInfo(
      update(workInfo, {
        [index] : {
          descriptionList : {
            [descripIndex] : {
              text: {$set: ev.target.value}
            }
          }
        }
      })
    )
  }

  const [ccaInfo, setCcaInfo] = useState(
    [{organisation:"NUS International Relations & Political Association", 
    id: uniqid(), 
    start: "May 2013",
    end: "May 2015",
    position: "Co-founder & President",
    descriptionList: [
      {id:uniqid(), 
      text:"Coordinated inaugural panel of speakers representing eight different career paths to better eudcate and counsel over 30 members on unique career opportunities related to public diplomacy"},
      {id: uniqid(),
      text: "Initiated seminar to inform club members on successful tactics for writing resumes and cover letters, increasing student levels of knowledge and confidence to pursue competitive internships" }]}]
  )


  const addCca = () => {
    setCcaInfo([
      ...ccaInfo, {
        organisation: "CCA",
        id: uniqid(),
        start: Date.now(),
        end: Date.now(),
        position: "Position",
        descriptionList: [{id:uniqid(), text:"Description"}]
      }
    ])
  }
 
  const deleteCca = (ev) => {
    setCcaInfo(
      ccaInfo.filter(cca => cca.id !== ev.target.dataset.ccaid)
    )
  }

  const addCcaDescription = (ev) => {
    const index = ccaInfo.findIndex(cca => cca.id === ev.target.dataset.parentid)

    setCcaInfo(
      update(ccaInfo, {
        [index] : {
          descriptionList : {$push: [{id:uniqid(), text:"Description"}]}
        }
      })
    )
  }

  const deleteCcaDescription = (ev) => {
    const index = ccaInfo.findIndex(cca => cca.id === ev.target.dataset.parentid)

    setCcaInfo(
      update(ccaInfo, {
        [index] : {
          descriptionList : {$set: ccaInfo[index].descriptionList.filter(description => description.id !== ev.target.dataset.descriptionid)}
        }
      })
    )
  }

  const updateCca = (ev) => {
    const index = ccaInfo.findIndex(cca => cca.id === ev.target.dataset.ccaid)

    setCcaInfo(
      update(ccaInfo, {
        [index] : {
          [ev.target.name] : {$set: ev.target.value}
        }
      })
    )
  }

 const updateCcaDescription = (ev) => {
    const index = ccaInfo.findIndex(cca => cca.id === ev.target.dataset.parentid)
    const descripIndex = ccaInfo[index].descriptionList.findIndex(description => description.id === ev.target.dataset.descriptionid)
    setCcaInfo(
      update(ccaInfo, {
        [index] : {
          descriptionList : {
            [descripIndex] : {
              text: {$set: ev.target.value}
            }
          }
        }
      })
    )
  }

  const [addInfo, setAddInfo] = useState([
    {id: uniqid(), text: "Languages: English (native), German (conversational), Mandarin Chinese (beginner)"},
    {id: uniqid(), text: "Skills: Adobe Photoshop, Illustrator, and InDesign; HTML and CSS; Microsoft Office."}])

  const addAddInfo = () => {
    setAddInfo([
      ...addInfo, {id: uniqid(), text:"Description"}
    ])

  }

  const deleteAddInfo = (ev) => {

    setAddInfo(
      addInfo.filter(info => info.id !== ev.target.dataset.descriptionid)
    )
  }

  const updateAddInfo = (ev) => {
    const index = addInfo.findIndex(info => info.id === ev.target.dataset.descriptionid)
    setAddInfo(update(addInfo, {
      [index] : {
        text: {$set: ev.target.value}
      }
    }))
  }

  return(
    <div className="App">
      <div className="detailInput">
        <h3> Input details below </h3>
        <PersonalDetailsInput
          updatePersonalInfo={updatePersonalInfo}/>

        <EducationDetailsInput 
          schoolList={educationInfo} 
          addSchool={addSchool} 
          deleteSchool={deleteSchool}
          updateSchool={updateSchool} 
          addDescription={addSchoolDescription} 
          deleteDescription={deleteSchoolDescription}
          updateDescription={updateSchoolDescription}/>

        <WorkDetailsInput
          workList={workInfo}
          addWork={addWork}
          deleteWork={deleteWork}
          updateWork={updateWork} 
          addDescription={addWorkDescription} 
          deleteDescription={deleteWorkDescription}
          updateDescription={updateWorkDescription}/>

        <CcaDetailsInput
          ccaList={ccaInfo}
          addCca={addCca}
          deleteCca={deleteCca}
          updateCca={updateCca} 
          addDescription={addCcaDescription} 
          deleteDescription={deleteCcaDescription}
          updateDescription={updateCcaDescription}/> 

        <AddInfoInput
          descriptionList={addInfo}
          addDescription={addAddInfo}
          deleteDescription={deleteAddInfo}
          updateDescription={updateAddInfo}/>

      </div>
      <div className="resume">
        <ResumeHeader
          personalInfo={personalInfo} />
        <EducationSection
          schoolList={educationInfo} />
        <WorkSection
          workList={workInfo} />
        
        <CcaSection
          ccaList={ccaInfo}/>

        <AddInfoSection
          addInfoList={addInfo}/>
          
      </div>
    </div>
  )
}

export default App