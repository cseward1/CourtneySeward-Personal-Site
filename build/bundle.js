(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// .ready () - Use ready() to make a function available after the document is loaded
	$(document).ready(function () {

	// const outputEl = $(".resumeListing")

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

		//Load the education,work & volunteer data
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
