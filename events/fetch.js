// fetch('https://api.example.com/data', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name: "Jack", age: 30 }),
// })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error('Error:', err));


// The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.// Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks

// With the Fetch API, you make a request by calling fetch(), which is available as a global function in both window and worker contexts. You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.

// The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

// We declare a string containing the URL and then call fetch(), passing the URL with no extra options.
// The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404: so we also check the response status and throw if it is not OK.