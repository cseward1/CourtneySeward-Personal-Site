(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// .ready () - Use ready() to make a function available after the document is loaded
	$(document).ready(function() {

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

					for (let key in this.education) {
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
},{}]},{},[1])
