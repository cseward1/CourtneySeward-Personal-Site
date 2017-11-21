

// .ready () - Use ready() to make a function available after the document is loaded
$(document).ready(function () {

	const outputEl = $(".resumeListing")

	// Create XHR objects (not invoked yet)
	const getEducation = $.ajax({ url: "./resume/education.json" })
	const getWork = $.ajax({ url: "./resume/work.json" })
	const getVolunteer = $.ajax({ url: "./resume/volunteer.json" })

	// create a Catalog object to store education, work, and the volunteer information
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
		}
	})
	// end object.create

	//call the education,work & volunteer data with .then statements
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
	outputEl.innerHTML +=


// create a function called "display" and call a "for loop" that goes through your "getEducation"
"display": {
	// value: function( ) {
		let finalHTML = ""

		for (let key in this.getEducation) {
			const currentEducation = this.getEducation[key]
			if (currentEducation) {
				const workInformation = this.work.find(w => w.id === currentEducation.work_id)
				const volunteerInformation = this.volunteer.find(v => v.id === currentEducation.volunteer_id)

				// call education, work, and volunteer information unto the main page:
				finalHTML += `
					<article id="education!${key}">
						<h1>${currentEducation.school}</h1>
						<div>${currentEducation.concentration}</div>
						<div>${currentEducation.graduationMonthYear}</div>

						<h1>${workInformation.work_id.company}</h1> 
						<div>Information:${workInformation.roleInTheCompany}</div>
						<div> Information: ${workInformation.workDuration}</div>
						<div> Information: ${workInformation.jobDescription}</div>
						<div> Information: ${workInformation.projects}</div>

						<h1>${volunteerInformation.volunteer_id.organization}</h1> 
						<div>Information:${volunteerInformation.dates}</div>
						<div>Information:${volunteerInformation.role}</div>
					</article>
				`
			}

		}
		outputEl.html(finalHTML)
	}