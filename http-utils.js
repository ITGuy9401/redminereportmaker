var rest = require('restler');

function get(url, queryData, headers) {
	return new Promise(
			queryData = queryData ? (jsonToQueryString(queryData)) : "";
				if (result instanceof Error) reject(result);
				else resolve(result);
			});
		}
	);
}

function post(url, queryData, data, headers, isMultipart) {
	return new Promise(
			queryData = queryData ? (jsonToQueryString(queryData)) : "";
				if (result instanceof Error) reject(result);
				else resolve(result);
			});
		}
	);
}

function put(url, queryData, data, headers, isMultipart) {
	return new Promise(
			queryData = queryData ? (jsonToQueryString(queryData)) : "";
				if (result instanceof Error) reject(result);
				else resolve(result);
			});
		}
	);
}

function deleteFn(url, queryData, headers) {
	return new Promise(
			queryData = queryData ? (jsonToQueryString(queryData)) : "";
				if (result instanceof Error) reject(result);
				else resolve(result);
			});
		}
	);
}

function option(url, queryData, headers) {
	return new Promise(
			queryData = queryData ? (jsonToQueryString(queryData)) : "";
				if (result instanceof Error) reject(result);
				else resolve(result);
			});
		}
	);
}

function parseHeaders(headers) {
	headers = headers || getHeadersObject();
}

function jsonToQueryString(json) {
	return '?' +
			return encodeURIComponent(key) + '=' +
				encodeURIComponent(json[key]);
		}).join('&');
}

function getHeadersObject() {
	return {
		'Accept': '*/*',
		'User-Agent': 'NODE.JS_REDMINE-REPORT-MAKER'
	}
}

module.exports = {
	get: get,
	post: post,
	put: put,
	delete: deleteFn,
	option: option,
	getHeadersObject: getHeadersObject
};
