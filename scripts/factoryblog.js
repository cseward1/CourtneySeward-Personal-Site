
// Creating Local Storage for My Blog:

// Start Blog Storage
// Create your function 
// Starting the blogs for OCTOBER


const  blogInformation= function (date,blogEntry) {
	return Object.create (null, {

		// Establish keys/values wihtin your Object.create for my Blog Information
		"date": {value:date, enumerable: true},
		"blogEntry": {value:blogEntry, enumerable:true}
	}) 
}
// input Blog Information into a new variable. This new variable will be called the "blogInformation" and put in the value as the parameters

const  firstEntry = blogInformation("October 17th,2017","We presented our first group projects in class today. Our assingment was to build a ficticious company's website. My group's name was the 'jagged ferrets' so we decided to model our company around the name we were given and created an adoption company who had ferrets for adoption and sold products for said ferrets. Everyone on the team was given a page to work on and my page was the 'Adoption form, Volunteer, Donate' page. I spent most of my time working on the Adoption form. I did alot of research on forms and the type of input options avliable. I used radio buttons, input fields, and an 'option' tags to create a drop down list of all the states for the user to chose from. I also added 'Required fields' on my form. Showcasing that to the rest of class was actually a lot of fun. I am not a fan of presenting or public speeking but showing casing my adoption form to the class was alot of fun.")

const secondEntry = blogInformation("October 20th,2017","We worked on pagenation today in class. For our second project Steve added an extra requirment a day before we presented to the class. He wanted us to have a pagenation at the bottom of our 'Product' page. He wanted the pagenation to be laid out as a row of numbers with clickable arrows enclosing the numbers.")

const thirdEntry = blogInformation("October 30th","Today we went into greater detail on building a Database. Our instructers, Meg and Steve, showed us a site called 'draw.io'. 'Draw.io' allows it's users to create tables that you can draw links that connect these tables together to display their relations. This site will help me visually plan out future databases that I will build. We walked through a few examples in class. I am seeing that  I learn more when I write out the steps with the teachers as we work through the problems. I believe I can retain more information when I am working alogside the teachers while the class is working through the problem. ")

// End Blog Storage

// Create arrays to go into the database
// let dateEntry =[];
let journalEntry= []

// Push objects into their designated array by calling the parameters within them
journalEntry.push(firstEntry,secondEntry,thirdEntry)

// volunteer.push(barCamp);

// Create a new variable that holds an object that stores an array. 
// const resumeDatabase = {
// 	// Date:date,
// 	journalEntry:journalEntry,
// }

// Store data in local storage....
// make the object into a string and then put it into your local storage
const completeBlog= JSON.stringify(blogInformation)
localStorage.setItem("completeBlog", completeBlog)

