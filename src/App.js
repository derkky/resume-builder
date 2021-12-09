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
    name: "Foh Cher Ern Don",
    phoneNumber: "",
    email: "don.foh@u.nus.edu",
    website: "linkedin.com/in/don-foh"})

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
    start: "Aug 2019",
    end: "Jan 2024",
    present: true,
    course: "Bachelor of Business Administration, Specialisation in Business Analytics",
    cap: "CAP: 4.5/5 (First Class Honours)",
    descriptionList: [
      {id:uniqid(), text:"Case competitions: SparkTank X 2021 (Semi-Finalist) | SGX NUS Sustainability 2021 | NUS-SGX Stock Pitch Competition"},
      {id: uniqid(), text:"Projects: commentaR - An R Shiny App to automate sentiment analysis of any Youtube video’s comments "}]}]
  )

  const updatePresentSchool = (ev) => {
    const index = educationInfo.findIndex(school => school.id === ev.target.dataset.schoolid)

    setEducationInfo(
      update(educationInfo, {
        [index] : {
          present : {$set: educationInfo[index].present ? false : true}
        }
      })
    )
  }

 
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
    [{company:"Saturday Kids", 
    id: uniqid(), 
    start: "May 2019",
    end: "Jun 2019",
    present: false,
    jobTitle: "Teaching Assistant (Python) - Code in the Community",
    descriptionList: [
      {id:uniqid(), 
      text:"Conducted Python lessons as a substitute teacher, teaching a class of underprivileged 20-30 students aged between 13-16 basic programming skills "},
      {id:uniqid(),
      text:"Worked with Instructors to provide students with meaningful and prompt feedback on their progress, clarifying any Python-related doubts or confusion"}]}]
  )

  const updatePresentWork = (ev) => {
    const index = workInfo.findIndex(work => work.id === ev.target.dataset.workid)

    setWorkInfo(
      update(workInfo, {
        [index] : {
          present : {$set: workInfo[index].present ? false : true}
        }
      })
    )
  }

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
    [{organisation:"NUS Business Analytics Consulting Team", 
    id: uniqid(), 
    start: "Aug 2021",
    end: "May 2022",
    present: true,
    position: "Junior Analyst",
    descriptionList: [
      {id:uniqid(), 
      text:"Explored data analytics techniques, including machine learning, data visualization, web scraping and time-series analysis "},
      {id: uniqid(),
      text: "Researched and presented data analytics techniques, helping to improve other members’ understanding" }]},
    {organisation: "NUS Business Club",
    id: uniqid(),
    start: "Oct 2019",
    end: "Sep 2020",
    present: true,
    position: "Logistics Head - NUS Business Camp",
    descriptionList: [
      {id:uniqid(), 
      text:"Headed a committee of 9 to prepare logistics for the faculty camp with over 400 participants"},
      {id: uniqid(),
      text: "Conducted in-depth cost-benefit analysis through use of Excel functions to optimize budget allocation, reducing financial expenditure by ~20% from past year" },
      {id: uniqid(),
      text: "Planned and executed logistics plan to store and deliver required equipment on schedule "},
      {id: uniqid(),
       text: "Liaised with respective stakeholders to ensure smooth delivery of logistics"}
    ]}]
  )

  const updatePresentCca = (ev) => {
    const index = ccaInfo.findIndex(cca => cca.id === ev.target.dataset.ccaid)

    setCcaInfo(
      update(ccaInfo, {
        [index] : {
          present : {$set: ccaInfo[index].present ? false : true}
        }
      })
    )
  }


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
    {id: uniqid(), text: "Interests: Piano, basketball, fencing, reading"},
    {id: uniqid(), text: "Programming Languages: Python, R, JavaScript, HTML, CSS, SQL, NoSQL, Ruby"},
    {id: uniqid(), text: "Technical Skills: Data Analysis, Data Visualization, Web Scraping, Sentiment Analysis, Web Development"},
    {id: uniqid(), text: "Design: Adobe Illustrator, Wireframing, Prototyping"},
    {id: uniqid(), text: "Tools and Playforms: MongoDB, PostgreSQL, IBM SPSS, Microsoft Excel (Pivot Tables, VLOOKUP)"},
    {id: uniqid(), text: "Languages: English, Malay, Mandarin/Hokkien"},
    {id: uniqid(), text: "Relevant modules: NM2207 (Computational Media Literacy) | NM2103 (Quantitative Research Methods) | DAO2702 (Programming for Business Analytics) | DBA3702 (Descriptive Analytics with R) | IT3010 (Data Management for Business Analytics) | NM3221 (Mobile Interaction Design) | NM3239Y (Retrieving, Exploring and Analysing Data)"}])

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
          updatePresent={updatePresentSchool}
          addSchool={addSchool} 
          deleteSchool={deleteSchool}
          updateSchool={updateSchool} 
          addDescription={addSchoolDescription} 
          deleteDescription={deleteSchoolDescription}
          updateDescription={updateSchoolDescription}/>

        <WorkDetailsInput
          workList={workInfo}
          addWork={addWork}
          updatePresent={updatePresentWork}
          deleteWork={deleteWork}
          updateWork={updateWork} 
          addDescription={addWorkDescription} 
          deleteDescription={deleteWorkDescription}
          updateDescription={updateWorkDescription}/>

        <CcaDetailsInput
          ccaList={ccaInfo}
          updatePresent={updatePresentCca}
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