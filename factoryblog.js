
// Creating Local Storage for My Blog:

// Start Blog Storage
// Create your function 
// Starting the blogs for OCTOBER

const  blogInformation= function (monthOfOctober,Entry) {
    return Object.create (null, {


// Establish keys/values wihtin your Object.create for my Blog History fo October
    "monthOfOctober": {value: Date, enumerable: true},
    "Entry": {value: Entry, enumerable:true},
}) 
}
// Input blog information into a new variable. This new variable will be called the "blog" and put in the value as the parameters

const October17th = blogInformation("We presented our first group projects in class today. Our assingment was to build a ficticious company's website. My group's name was the 'jagged ferrets' so we decided to model our company around the name we were given and created an adoption company who had ferrets for adoption and sold products for said ferrets. Everyone on the team was given a page to work on and my page was the 'Adoption form, Volunteer, Donate' page. I spent most of my time working on the Adoption form. I did alot of research on forms and the type of input options avliable. I used radio buttons, input fields, and an 'option' tags to create a drop down list of all the states for the user to chose from. I also added 'Required fields' on my form. Showcasing that to the rest of class was actually a lot of fun. I am not a fan of presenting or public speeking but showing casing my adoption form to the class was alot of fun.")

const October20th = blogInformation("October 20, 2017", "We worked on pagenation today in class. For our second project Steve added an extra requirment a day before we presented to the class. He wanted us to have a pagenation at the bottom of our 'Product' page. He wanted the pagenation to be laid out as a row of numbers with clickable arrows enclosing the numbers.")


const October30th = blogInformation("October 30th, 2017", "Today we went into greater detail on building a Database. Our instructers, Meg and Steve, showed us a site called 'draw.io'. 'Draw.io' allows it's users to create tables that you can draw links that connect these tables together to display their relations. This site will help me visually plan out future databases that I will build. We walked through a few examples in class. I am seeing that  I learn more when I write out the steps with the teachers as we work through the problems. I believe I can retain more information when I am working alogside the teachers while the class is working through the problem.")

// End Blog Storage for OCTOBER

// Create arrays to go into the database
let month = [];
let dates =[];
let journalEntry= [];

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

// Store data in local storage....
// make the object into a string and then put it into your local storage
const completeResume= JSON.stringify(resumeDatabase);
localStorage.setItem("completeResume", completeResume);

