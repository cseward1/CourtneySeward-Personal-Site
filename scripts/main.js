

// .ready () - Use ready() to make a function available after the document is loaded
$(document).ready(function () {

	const outputEl = $(".resumeListing")

	// Create XHR objects (not invoked yet)
	const getEducation = $.ajax({ url: "./scripts/resume/education.json" })
	const getWork = $.ajax({ url: "./scripts/resume/work.json"})
	const getVolunteer = $.ajax({ url: "./scripts/resume/volunteer.json"})
	
	// create a "Catalog" of objects to store education, work, and volunteer information

	const Catalog = Object.create(null, {
		"education": {
			value: null,
			writable: true
		},
		"work": {
			value: null,
			writable: true
		},
		"volunteer": {
			value: null,
			writable: true
		},
		// create a function called "display" and call a "for loop" that goes through your "getEducation" to display that information on the inner HTML
		"display": {
			value: function () {
				let finalHTML = ""
// create a for each loop to call 
				this.education.forEach(education => {
						const educationWork = this.work.find(w => w.id === education.work_id)
						const educationVolunteer = this.volunteer.find(v => v.id === education.volunteer_id)

						// call education, work, and volunteer information unto the main page:
						finalHTML += `
					<article id="education_${education.id}">
						<h1>${education.school}</h1>
						<div>${education.concentration}</div>
						<div>${education.graduationMonthYear}</div>

						<h1>${getWork.work_id.company}</h1> 
						<div>Information:${work.roleInTheCompany}</div>
						<div> Information: ${work.workDuration}</div>
						<div> Information: ${work.jobDescription}</div>
						<div> Information: ${work.projects}</div>

						<h1>${volunteerInformation.volunteer_id.organization}</h1> 
						<div>Information:${volunteerInformation.dates}</div>
						<div>Information:${volunteerInformation.role}</div>
					</article>
				`
					},
				outputEl.html(finalHTML)
			}
		}
	})
	// Load the product & category data
	//combine your objects with .then statements
	getEducation
		.then(result => {
			Catalog.education = result.education
			return getWork
		})
		.then(result => {
			Catalog.work = result.work
			return getVolunteer
		})
		.then(result => {
			Catalog.volunteer = result.volunteer
			Catalog.display()
		})		
})	 


// STEVES NOTES
// objects and functions: 
// objects represent things and properties describe things 
// functions represent behaviors 
// every module you create have an object for it 
