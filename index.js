// Primary file for the API



// Dependencies 
const http = require("http");
const url = require("url");


// the server should respond to all requests with a string
const server = http.createServer(function (req, res) {
    // Get the URL and parse/turn it into an object
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Get the query string as an object
    const queryStringObject = parsedUrl.query;

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // Get the headers as an object
    const headers = req.headers;

    // Send the response
    res.end("Hello world\n")

    // Log the request path
    console.log("request received with these headers", headers)
});



// Start the server, and have it listen on port 3000
server.listen(3000, function () {
    console.log("The server is listening on port 3000 now\n")
})
