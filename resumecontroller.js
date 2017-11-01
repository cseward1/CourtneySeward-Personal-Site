
// once data is in local Storage - make it accesible to be pulled out unto to the DOM
const storedResume = localStorage.getItem("completeResume");
let resumeCompleteDatabase = JSON.parse(storedResume);

// Now write out the syntax to make it appear on the page
// doucument. getelement 

document.getElementById("articles").innerHTML = ``
console.log(resumeCompleteDatabase)

// Write an array.forEach loop for "Education" and styling
resumeCompleteDatabase.Education.forEach(function(element) {
    document.getElementById("articles").innerHTML+= `
    <article class = "educationStyling"> 
    <h1 class="h1EducationStyling"> ${element.school}</h1>
    <div> ${element.concentration}</div>
    <div> ${element.graduationMonthYear}</div>
  </article> `
} );

// array.forEach loop for "Work" and Styling 
resumeCompleteDatabase.Work.forEach(function(element) {
    document.getElementById("articles").innerHTML+= `
    <article class = "workStyling"> 
    <h1 class="h1WorkStyling">  ${element.company}</h1>
    <div> ${element.roleInTheCompany}</div>
    <div> ${element.workDuration}</div>
    <div> ${element.jobDescription}</div>
    <div> ${element.projects}</div>
  </article> `
} );


// array.forEach loop for "Volunteer" and Styling
resumeCompleteDatabase.Volunteer.forEach(function(element) {
    document.getElementById("articles").innerHTML+= `
    <article class = "volunteerStyling"> 
    <h1 class="h1VolunteerStyling">  ${element.organization}</h1>
    <div> ${element.dates}</div>
    <div> ${element.role}</div>
  </article> `
} );
