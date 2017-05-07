var querystring = require('querystring');
var https = require('https');

var redmineHost = process.env.REDMINE_HOST;
const METHOD = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT"
}

async function getCurrentUser(username, password) {
	var authBase = username + ":" + password;
	authBase = authBase.toString("base64");

	var options = {
		host: redmineHost,
		path: '/users/current.json',
		method: METHOD.GET,
		headers: {
			'Authorization': 'Basic ' + authBase
		}
	}
}

async function getExport(username, password, year, month) {
	var dataString = JSON.stringify({
		username: username,
		password: password
	});

	var options = {
		host: redmineHost,
		path: '/users/current.json',
		method: METHOD.POST,
		headers: {

			'Authorization': 'Basic ' + authBase;
			'Content-Type': 'application/json',
			'Content-Length': dataString.length
		}
	}
}

modules.export.getCurrentUser = getCurrentUser;
modules.export.getExport = getExport;
