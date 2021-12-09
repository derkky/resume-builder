(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i.n(n),s=i(12),c=i.n(s),d=i(7),r=i(2),o=i(10),l=i(5),u=(i(17),i(0)),j=function(e){return Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsx)("h2",{children:" Personal Details "}),Object(u.jsx)("label",{htmlFor:"name",children:" Name "}),Object(u.jsx)("input",{type:"text",name:"name",onChange:e.updatePersonalInfo}),Object(u.jsx)("label",{htmlFor:"phoneNumber",children:" Phone Number "}),Object(u.jsx)("input",{type:"text",name:"phoneNumber",onChange:e.updatePersonalInfo}),Object(u.jsx)("label",{htmlFor:"email",children:" Email "}),Object(u.jsx)("input",{type:"text",name:"email",onChange:e.updatePersonalInfo}),Object(u.jsx)("label",{htmlFor:"website",children:" Website "}),Object(u.jsx)("input",{type:"text",name:"website",onChange:e.updatePersonalInfo})]})},p=function(e){return Object(u.jsxs)("div",{className:"descriptionInput",children:[Object(u.jsx)("label",{children:" Description "}),e.descriptionList.map((function(t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",className:"descriptionTextInput",onChange:e.updateDescription,"data-parentid":e.id,"data-descriptionid":t.id}),Object(u.jsx)("button",{className:"deleteButton","data-parentid":e.id,"data-descriptionid":t.id,onClick:e.deleteDescription,children:" Delete"})]},t.id)})),Object(u.jsx)("button",{className:"addButton","data-parentid":e.id,onClick:e.addDescription,children:" Add Description "})]})},b=function(e){return Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsx)("h2",{children:" Education "}),e.schoolList.map((function(t){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("label",{children:Object(u.jsxs)("div",{children:["School Name",Object(u.jsx)("button",{className:"deleteButton","data-schoolid":t.id,onClick:e.deleteSchool,children:" Delete School "})]})}),Object(u.jsx)("input",{type:"text",name:"schoolName","data-schoolid":t.id,onChange:e.updateSchool}),Object(u.jsx)("label",{children:" Start Date "}),Object(u.jsx)("input",{type:"month",name:"start","data-schoolid":t.id,onChange:e.updateSchool}),Object(u.jsx)("label",{children:" End Date "}),Object(u.jsxs)("div",{className:"endDateInput",children:[Object(u.jsx)("input",{type:"month",name:"end","data-schoolid":t.id,onChange:e.updateSchool}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox","data-schoolid":t.id,onClick:e.updatePresent}),Object(u.jsx)("label",{children:" Present "})]})]}),Object(u.jsx)("label",{children:" Course Title "}),Object(u.jsx)("input",{type:"text",name:"course","data-schoolid":t.id,onChange:e.updateSchool}),Object(u.jsx)("label",{children:" CAP "}),Object(u.jsx)("input",{type:"text",name:"cap","data-schoolid":t.id,onChange:e.updateSchool}),Object(u.jsx)(p,{id:t.id,descriptionList:t.descriptionList,addDescription:e.addDescription,deleteDescription:e.deleteDescription,updateDescription:e.updateDescription})]},t.id)})),Object(u.jsx)("button",{className:"addButton",onClick:e.addSchool,children:" Add school "})]})},h=function(e){return Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsx)("h2",{children:" Working Experience "}),e.workList.map((function(t){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("label",{children:Object(u.jsxs)("div",{children:["Company",Object(u.jsx)("button",{className:"deleteButton","data-workid":t.id,onClick:e.deleteWork,children:" Delete Work "})]})}),Object(u.jsx)("input",{type:"text",name:"company","data-workid":t.id,onChange:e.updateWork}),Object(u.jsx)("label",{children:" Job Title "}),Object(u.jsx)("input",{type:"text",name:"jobTitle","data-workid":t.id,onChange:e.updateWork}),Object(u.jsx)("label",{children:" Start Date "}),Object(u.jsx)("input",{type:"month",name:"start","data-workid":t.id,onChange:e.updateWork}),Object(u.jsx)("label",{children:" End Date "}),Object(u.jsxs)("div",{className:"endDateInput",children:[Object(u.jsx)("input",{type:"month",name:"end","data-workid":t.id,onChange:e.updateWork}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox","data-workid":t.id,onClick:e.updatePresent}),Object(u.jsx)("label",{children:" Present "})]})]}),Object(u.jsx)(p,{id:t.id,descriptionList:t.descriptionList,addDescription:e.addDescription,deleteDescription:e.deleteDescription,updateDescription:e.updateDescription})]},t.id)})),Object(u.jsx)("button",{className:"addButton",onClick:e.addWork,children:" Add Work "})]})},x=function(e){return Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsx)("h2",{children:" Additional Information "}),Object(u.jsx)(p,{descriptionList:e.descriptionList,addDescription:e.addDescription,deleteDescription:e.deleteDescription,updateDescription:e.updateDescription})]})},m=i(1),O=i.n(m),f=function(e){return Object(u.jsxs)("div",{className:"resumeHeader",children:[Object(u.jsx)("h1",{children:e.personalInfo.name}),Object(u.jsx)("span",{children:e.personalInfo.phoneNumber}),Object(u.jsx)("span",{children:e.personalInfo.email}),Object(u.jsx)("span",{children:e.personalInfo.website})]})},g=function(e){return Object(u.jsxs)("div",{className:"sectionWithItems",children:[Object(u.jsx)("h3",{children:" EDUCATION "}),e.schoolList.map((function(e){var t=new Date(e.start).toLocaleDateString("en-us",{year:"numeric",month:"short"}),i=new Date(e.end).toLocaleDateString("en-us",{year:"numeric",month:"short"});return Object(u.jsxs)("div",{className:"sectionItem",children:[Object(u.jsxs)("div",{className:"itemHeader",children:[Object(u.jsxs)("b",{children:[" ",e.schoolName," "]}),Object(u.jsxs)("b",{className:"dates",children:[t," to ",e.present?"Present":i]})]}),Object(u.jsx)("div",{className:"itemSubheader",children:Object(u.jsxs)("span",{children:[" ",e.course," "]})}),Object(u.jsx)("div",{className:"itemDescription",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",e.cap," "]}),e.descriptionList.map((function(e){return Object(u.jsxs)("li",{"data-descriptionid":e.id,children:[" ",e.text," "]},e.id)}))]})})]},e.id)}))]})},D=function(e){return Object(u.jsxs)("div",{className:"inputContainer",children:[Object(u.jsx)("h2",{children:" Co-Curricular Activities "}),e.ccaList.map((function(t){return Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("label",{children:Object(u.jsxs)("div",{children:["Organisation",Object(u.jsx)("button",{className:"deleteButton","data-ccaid":t.id,onClick:e.deleteCca,children:" Delete CCA "})]})}),Object(u.jsx)("input",{type:"text",name:"organisation","data-ccaid":t.id,onChange:e.updateCca}),Object(u.jsx)("label",{children:" Position "}),Object(u.jsx)("input",{type:"text",name:"position","data-ccaid":t.id,onChange:e.updateCca}),Object(u.jsx)("label",{children:" Start Date "}),Object(u.jsx)("input",{type:"month",name:"start","data-ccaid":t.id,onChange:e.updateCca}),Object(u.jsx)("label",{children:" End Date "}),Object(u.jsxs)("div",{className:"endDateInput",children:[Object(u.jsx)("input",{type:"month",name:"end","data-ccaid":t.id,onChange:e.updateCca}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox","data-ccaid":t.id,onClick:e.updatePresent}),Object(u.jsx)("label",{children:" Present "})]})]}),Object(u.jsx)(p,{id:t.id,descriptionList:t.descriptionList,addDescription:e.addDescription,deleteDescription:e.deleteDescription,updateDescription:e.updateDescription})]},t.id)})),Object(u.jsx)("button",{className:"addButton",onClick:e.addCca,children:" Add CCA "})]})},v=i(3),C=i.n(v),N=function(e){return Object(u.jsxs)("div",{className:"sectionWithItems",children:[Object(u.jsx)("h3",{children:" WORKING EXPERIENCE "}),e.workList.map((function(e){var t=new Date(e.start).toLocaleDateString("en-us",{year:"numeric",month:"short"}),i=new Date(e.end).toLocaleDateString("en-us",{year:"numeric",month:"short"});return Object(u.jsxs)("div",{className:"sectionItem",children:[Object(u.jsxs)("div",{className:"itemHeader",children:[Object(u.jsxs)("b",{children:[" ",e.company," "]}),Object(u.jsxs)("b",{className:"dates",children:[t," to ",e.present?"Present":i]})]}),Object(u.jsx)("div",{className:"itemSubheader",children:Object(u.jsxs)("span",{children:[" ",e.jobTitle," "]})}),Object(u.jsx)("div",{className:"itemDescription",children:Object(u.jsx)("ul",{children:e.descriptionList.map((function(e){return Object(u.jsxs)("li",{"data-descriptionid":e.id,children:[" ",e.text," "]},e.id)}))})})]},e.id)}))]})},y=function(e){return Object(u.jsxs)("div",{className:"sectionWithItems",children:[Object(u.jsx)("h3",{children:" CO-CURRICULAR ACTIVITIES "}),e.ccaList.map((function(e){var t=new Date(e.start).toLocaleDateString("en-us",{year:"numeric",month:"short"}),i=new Date(e.end).toLocaleDateString("en-us",{year:"numeric",month:"short"});return Object(u.jsxs)("div",{className:"sectionItem",children:[Object(u.jsxs)("div",{className:"itemHeader",children:[Object(u.jsxs)("b",{children:[" ",e.organisation," "]}),Object(u.jsxs)("b",{className:"dates",children:[t," to ",e.present?"Present":i]})]}),Object(u.jsx)("div",{className:"itemSubheader",children:Object(u.jsxs)("span",{children:[" ",e.position," "]})}),Object(u.jsx)("div",{className:"itemDescription",children:Object(u.jsx)("ul",{children:e.descriptionList.map((function(e){return Object(u.jsxs)("li",{"data-descriptionid":e.id,children:[" ",e.text," "]},e.id)}))})})]},e.id)}))]})},L=function(e){return Object(u.jsxs)("div",{className:"addInfoSection",children:[Object(u.jsx)("h3",{children:" ADDITIONAL INFORMATION "}),Object(u.jsx)("div",{className:"itemDescription",children:Object(u.jsx)("ul",{children:e.addInfoList.map((function(e){return Object(u.jsxs)("li",{"data-descriptionid":e.id,children:[" ",e.text," "]},e.id)}))})})]})},I=function(){var e=Object(n.useState)({name:"Foh Cher Ern Don",phoneNumber:"",email:"don.foh@u.nus.edu",website:"linkedin.com/in/don-foh"}),t=Object(l.a)(e,2),i=t[0],a=t[1],s=Object(n.useState)([{schoolName:"National University of Singapore",id:O()(),start:"Aug 2019",end:"Jan 2024",present:!0,course:"Bachelor of Business Administration, Specialisation in Business Analytics",cap:"CAP: 4.5/5 (First Class Honours)",descriptionList:[{id:O()(),text:"Case competitions: SparkTank X 2021 (Semi-Finalist) | SGX NUS Sustainability 2021 | NUS-SGX Stock Pitch Competition"},{id:O()(),text:"Projects: commentaR - An R Shiny App to automate sentiment analysis of any Youtube video\u2019s comments "}]}]),c=Object(l.a)(s,2),p=c[0],m=c[1],v=Object(n.useState)([{company:"Saturday Kids",id:O()(),start:"May 2019",end:"Jun 2019",present:!1,jobTitle:"Teaching Assistant (Python) - Code in the Community",descriptionList:[{id:O()(),text:"Conducted Python lessons as a substitute teacher, teaching a class of underprivileged 20-30 students aged between 13-16 basic programming skills "},{id:O()(),text:"Worked with Instructors to provide students with meaningful and prompt feedback on their progress, clarifying any Python-related doubts or confusion"}]}]),I=Object(l.a)(v,2),S=I[0],k=I[1],P=Object(n.useState)([{organisation:"NUS Business Analytics Consulting Team",id:O()(),start:"Aug 2021",end:"May 2022",present:!0,position:"Junior Analyst",descriptionList:[{id:O()(),text:"Explored data analytics techniques, including machine learning, data visualization, web scraping and time-series analysis "},{id:O()(),text:"Researched and presented data analytics techniques, helping to improve other members\u2019 understanding"}]},{organisation:"NUS Business Club",id:O()(),start:"Oct 2019",end:"Sep 2020",present:!0,position:"Logistics Head - NUS Business Camp",descriptionList:[{id:O()(),text:"Headed a committee of 9 to prepare logistics for the faculty camp with over 400 participants"},{id:O()(),text:"Conducted in-depth cost-benefit analysis through use of Excel functions to optimize budget allocation, reducing financial expenditure by ~20% from past year"},{id:O()(),text:"Planned and executed logistics plan to store and deliver required equipment on schedule "},{id:O()(),text:"Liaised with respective stakeholders to ensure smooth delivery of logistics"}]}]),w=Object(l.a)(P,2),A=w[0],T=w[1],B=Object(n.useState)([{id:O()(),text:"Interests: Piano, basketball, fencing, reading"},{id:O()(),text:"Programming Languages: Python, R, JavaScript, HTML, CSS, SQL, NoSQL, Ruby"},{id:O()(),text:"Technical Skills: Data Analysis, Data Visualization, Web Scraping, Sentiment Analysis, Web Development"},{id:O()(),text:"Design: Adobe Illustrator, Wireframing, Prototyping"},{id:O()(),text:"Tools and Playforms: MongoDB, PostgreSQL, IBM SPSS, Microsoft Excel (Pivot Tables, VLOOKUP)"},{id:O()(),text:"Languages: English, Malay, Mandarin/Hokkien"},{id:O()(),text:"Relevant modules: NM2207 (Computational Media Literacy) | NM2103 (Quantitative Research Methods) | DAO2702 (Programming for Business Analytics) | DBA3702 (Descriptive Analytics with R) | IT3010 (Data Management for Business Analytics) | NM3221 (Mobile Interaction Design) | NM3239Y (Retrieving, Exploring and Analysing Data)"}]),W=Object(l.a)(B,2),E=W[0],M=W[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"detailInput",children:[Object(u.jsx)("h3",{children:" Input details below "}),Object(u.jsx)(j,{updatePersonalInfo:function(e){var t=e.target.value;a(Object(o.a)(Object(o.a)({},i),{},Object(r.a)({},e.target.name,t)))}}),Object(u.jsx)(b,{schoolList:p,updatePresent:function(e){var t=p.findIndex((function(t){return t.id===e.target.dataset.schoolid}));m(C()(p,Object(r.a)({},t,{present:{$set:!p[t].present}})))},addSchool:function(){m([].concat(Object(d.a)(p),[{schoolName:"New School",id:O()(),start:Date.now(),end:Date.now(),course:"Course Name",cap:"CAP: ",descriptionList:[{id:O()(),text:"Description"}]}]))},deleteSchool:function(e){m(p.filter((function(t){return t.id!==e.target.dataset.schoolid})))},updateSchool:function(e){var t=p.findIndex((function(t){return t.id===e.target.dataset.schoolid}));m(C()(p,Object(r.a)({},t,Object(r.a)({},e.target.name,{$set:e.target.value}))))},addDescription:function(e){var t=p.findIndex((function(t){return t.id===e.target.dataset.parentid}));m(C()(p,Object(r.a)({},t,{descriptionList:{$push:[{id:O()(),text:"Description"}]}})))},deleteDescription:function(e){var t=p.findIndex((function(t){return t.id===e.target.dataset.parentid}));m(C()(p,Object(r.a)({},t,{descriptionList:{$set:p[t].descriptionList.filter((function(t){return t.id!==e.target.dataset.descriptionid}))}})))},updateDescription:function(e){var t=p.findIndex((function(t){return t.id===e.target.dataset.parentid})),i=p[t].descriptionList.findIndex((function(t){return t.id===e.target.dataset.descriptionid}));m(C()(p,Object(r.a)({},t,{descriptionList:Object(r.a)({},i,{text:{$set:e.target.value}})})))}}),Object(u.jsx)(h,{workList:S,addWork:function(){k([].concat(Object(d.a)(S),[{company:"Company",id:O()(),start:Date.now(),end:Date.now(),jobTitle:"Position",descriptionList:[{id:O()(),text:"Description"}]}]))},updatePresent:function(e){var t=S.findIndex((function(t){return t.id===e.target.dataset.workid}));k(C()(S,Object(r.a)({},t,{present:{$set:!S[t].present}})))},deleteWork:function(e){k(S.filter((function(t){return t.id!==e.target.dataset.workid})))},updateWork:function(e){var t=S.findIndex((function(t){return t.id===e.target.dataset.workid}));k(C()(S,Object(r.a)({},t,Object(r.a)({},e.target.name,{$set:e.target.value}))))},addDescription:function(e){var t=S.findIndex((function(t){return t.id===e.target.dataset.parentid}));k(C()(S,Object(r.a)({},t,{descriptionList:{$push:[{id:O()(),text:"Description"}]}})))},deleteDescription:function(e){var t=S.findIndex((function(t){return t.id===e.target.dataset.parentid}));k(C()(S,Object(r.a)({},t,{descriptionList:{$set:S[t].descriptionList.filter((function(t){return t.id!==e.target.dataset.descriptionid}))}})))},updateDescription:function(e){var t=S.findIndex((function(t){return t.id===e.target.dataset.parentid})),i=S[t].descriptionList.findIndex((function(t){return t.id===e.target.dataset.descriptionid}));k(C()(S,Object(r.a)({},t,{descriptionList:Object(r.a)({},i,{text:{$set:e.target.value}})})))}}),Object(u.jsx)(D,{ccaList:A,updatePresent:function(e){var t=A.findIndex((function(t){return t.id===e.target.dataset.ccaid}));T(C()(A,Object(r.a)({},t,{present:{$set:!A[t].present}})))},addCca:function(){T([].concat(Object(d.a)(A),[{organisation:"CCA",id:O()(),start:Date.now(),end:Date.now(),position:"Position",descriptionList:[{id:O()(),text:"Description"}]}]))},deleteCca:function(e){T(A.filter((function(t){return t.id!==e.target.dataset.ccaid})))},updateCca:function(e){var t=A.findIndex((function(t){return t.id===e.target.dataset.ccaid}));T(C()(A,Object(r.a)({},t,Object(r.a)({},e.target.name,{$set:e.target.value}))))},addDescription:function(e){var t=A.findIndex((function(t){return t.id===e.target.dataset.parentid}));T(C()(A,Object(r.a)({},t,{descriptionList:{$push:[{id:O()(),text:"Description"}]}})))},deleteDescription:function(e){var t=A.findIndex((function(t){return t.id===e.target.dataset.parentid}));T(C()(A,Object(r.a)({},t,{descriptionList:{$set:A[t].descriptionList.filter((function(t){return t.id!==e.target.dataset.descriptionid}))}})))},updateDescription:function(e){var t=A.findIndex((function(t){return t.id===e.target.dataset.parentid})),i=A[t].descriptionList.findIndex((function(t){return t.id===e.target.dataset.descriptionid}));T(C()(A,Object(r.a)({},t,{descriptionList:Object(r.a)({},i,{text:{$set:e.target.value}})})))}}),Object(u.jsx)(x,{descriptionList:E,addDescription:function(){M([].concat(Object(d.a)(E),[{id:O()(),text:"Description"}]))},deleteDescription:function(e){M(E.filter((function(t){return t.id!==e.target.dataset.descriptionid})))},updateDescription:function(e){var t=E.findIndex((function(t){return t.id===e.target.dataset.descriptionid}));M(C()(E,Object(r.a)({},t,{text:{$set:e.target.value}})))}})]}),Object(u.jsxs)("div",{className:"resume",children:[Object(u.jsx)(f,{personalInfo:i}),Object(u.jsx)(g,{schoolList:p}),Object(u.jsx)(N,{workList:S}),Object(u.jsx)(y,{ccaList:A}),Object(u.jsx)(L,{addInfoList:E})]})]})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.e38f99c6.chunk.js.map