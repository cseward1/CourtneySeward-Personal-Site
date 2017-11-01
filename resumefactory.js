
// Creating Local Storage for My Resume:

// Start Education Storage
// Create your function 
const  educationInformation= function (school, concentration, graduationMonthYear,clubs) {
    return Object.create (null, {


// Establish keys/values wihtin your Object.create for my Education History
    "school": {value: school, enumerable: true},
    "concentration": {value: concentration, enumerable:true},
    "graduationMonthYear": {value:graduationMonthYear, enumerable:true},
    "clubs": {value:"clubs", enumberable:true}
}) 
}
// input education information into a new variable. This new variable will be called the "educationInformation" and put in the value as the parameters

const NSS = educationInformation("Nashville Software School","Full Stack Web Development Bootcamp","Duration of Program: October 2017 - April 2018")

const UTK = educationInformation("University of Tennessee, Knoxville", "<strong> Areas of Study: </strong> BA in English, Literature Concentration & Psychology", "<strong> Graduated: </strong>July 2015", "Reformed United Fellowship & Film Club")
// End Education Storage


// Start Work Experience Storage
const workInformation= function (company, roleInTheCompany, workDuration, jobDescription,projects) {
    return Object.create (null, {
    
    "company": {value:company, enumerable:true},
    "roleInTheCompany": {value:roleInTheCompany, enumerable: true},
    "workDuration": {value:workDuration, enumerable:true},
    "jobDescription": {value:jobDescription, enumerable:true},
    "projects": {value:projects, enumerable: true}
})
}

// input Work Experience into a new variable. This new variable will be called the "educationInformation" and put in the value as the parameters

const Anthropologie = workInformation("Anthropologie", "Sales Associate", "September 2016-September 2017","Description:Engaged with customers in a friendly manner & worked the cash register. Communicated with a diverse range of ages and personality,Strengthened my customer relation skills.")

const AFP = workInformation("Assurance Financial Partners", "Administrative Assistant","October 2015 - July 2016", "<strong>Administrative Work:</strong><br> Handled the company's CRM Database, Managed CEO's calendar, Customer Relations,Handeled Day to day operations of oﬃce tasks and maintenance, New customer on-boarding.  Marketing Work:Helped manage the company's social media accounts, Sought out potential clients via LinkedIn lead generation,Crafted Email campaign for the company's monthly networking events, networking meetings for members of the LinkedIn networking group, Created all event content given to attendees, Acted as a liaison for event speakers", "Created a 30 + paged Administrative & Events Handbook for the following employee")

const Thrive = workInformation("Thrive", "After School Care Teacher", "January 2013- June 2013", "Taught 1st and 2nd graders in the  inner city through  after school  care program. Directed students in after school academic activities, group work, and physical education.Sharpened communication skills  and learned about family dynamics and communication by daily working with the children and parents")
// End of Work Information Storage



// Start Volunteer Storage
// Create your function 
const volunteerInformation= function (organization, dates, role) {
    return Object.create (null, {

// Establish keys/values wihtin your Object.create for my Volunteer History

    "organization":{value:organization, enumerable:true},
    "dates":{value:dates, enumerable: true},
    "role":{value:role, enumerable:true}
})
}

// input education information into a new variable. This new variable will be called the "educationInformation" and put in the value as the parameters

const barCamp = volunteerInformation("BarCamp", "October 20th thru 21st 2017", "Helped set up the event. Also helped run the registration table")

// End Volunteer Storage


// Create arrays to go into the database
let work = [];
let education= [];
let volunteer = [];

// Push objects into their designated array by calling the parameters within them
education.push(NSS,UTK);
work.push(Anthropologie, AFP, Thrive);
volunteer.push(barCamp);

// Create a new variable that holds an object that stores an array. 
const resumeDatabase = {
    Education : education,
    Work : work,
    Volunteer : volunteer
}
console.log(resumeDatabase)
// Store data in local storage....
// make the object into a string and then put it into your local storage
const completeResume= JSON.stringify(resumeDatabase);
localStorage.setItem("completeResume", completeResume);


