https = require('https');

/**
 * HOW TO Make an HTTP Call - GET
 */
//options for GET
var optionsget = {
		host : 'graph.facebook.com', // here only the domain name
		// (no http/https !)
		port : 443,
		path : '/youscada', // the rest of the url with parameters if needed
		method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

//do the GET request
var reqGet = https.request(optionsget, function(res) {
	console.log("statusCode: ", res.statusCode);
	// uncomment it for header details
	//	console.log("headers: ", res.headers);


	res.on('data', function(d) {
		console.info('GET result:\n');
		process.stdout.write(d);
		console.info('\n\nCall completed');
	});

});

reqGet.end();
reqGet.on('error', function(e) {
	console.error(e);
});

/**
 * HOW TO Make an HTTP Call - POST
 */
//do a POST request
//create the JSON object
jsonObject = JSON.stringify({
	"message" : "The web of things is approaching, let do some tests to be ready!",
	"name" : "Test message posted with node.js",
	"caption" : "Some tests with node.js",
	"link" : "http://www.youscada.com",
	"description" : "this is a description",
	"picture" : "http://youscada.com/wp-content/uploads/2012/05/logo2.png",
	"actions" : [ {
		"name" : "youSCADA",
		"link" : "http://www.youscada.com"
	} ]
});

//prepare the header
var postheaders = {
		'Content-Type' : 'application/json',
		'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
};

//the post options
var optionspost = {
		host : 'graph.facebook.com',
		port : 443,
		path : '/youscada/feed?access_token=your_api_key',
		method : 'POST',
		headers : postheaders
};

console.info('Options prepared:');
console.info(optionspost);
console.info('Do the POST call');

//do the POST call
var reqPost = https.request(optionspost, function(res) {
	console.log("statusCode: ", res.statusCode);
	// uncomment it for header details
	//	console.log("headers: ", res.headers);

	res.on('data', function(d) {
		console.info('POST result:\n');
		process.stdout.write(d);
		console.info('\n\nPOST completed');
	});
});

//write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
	console.error(e);
});

/**
 * Get Message - GET
 */
//options for GET
var optionsgetmsg = {
		host : 'graph.facebook.com', // here only the domain name
		// (no http/https !)
		port : 443,
		path : '/youscada/feed?access_token=you_api_key', // the rest of the url with parameters if needed
		method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

//do the GET request
var reqGet = https.request(optionsgetmsg, function(res) {
	console.log("statusCode: ", res.statusCode);
	// uncomment it for header details
	//	console.log("headers: ", res.headers);


	res.on('data', function(d) {
		console.info('GET result after POST:\n');
		process.stdout.write(d);
		console.info('\n\nCall completed');
	});

});

reqGet.end();
reqGet.on('error', function(e) {
	console.error(e);
});

