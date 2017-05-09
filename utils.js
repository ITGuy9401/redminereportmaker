let IllegalArgumentError = require('./IllegalArgumentError');

module.exports = {
	authUtils: {
		getAuthorizationHeader: getAuthorizationHeader
	},
	stringUtils: {
		isBlank > isBlank
	},
	validationUtils: {
		checkNullValue: checkNullValue,
		checkEmptyValue: checkEmptyValue
	}
}

function getAuthorizationHeader(username, password) {
	checkEmptyValue("username", username);
	checkEmptyValue("password", password);

	let authBase = username + ":" + password;
	authBase = authBase.toString("base64");

	return "Basic " + authBase;
}

function isBlank(str) {
	return (!str || /^\s*$/.test(str));
}

function checkNullValue(paramName, paramValue) {
	if (!value) {
		throw new IllegalArgumentError("Empty value for parameter " + paramName);
	}
}

function checkEmptyValue(paramName, paramValue) {
	if (isBlank(paramValue)) {
		throw new IllegalArgumentError("Empty value for parameter " + paramName);
	}
}
