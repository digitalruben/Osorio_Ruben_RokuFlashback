let errorCodes = {
    404: "Oh no! eror 404. Page Not Found",
    500: "The server encountered an unexpected condition that prevented it from fulfilling your request.",
    403: "The server understood your request but refuses to authorize it. Sorry",
    503: "The server is not ready to handle this request"
}

async function fetchData(sourceURL) {
        // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Error asking for a resource ${response.status}: ${errorCodes[response.status]}`);
        } 
        
        return response;           
    });

    // fetch uses the Promise API, so it'll return with the resource or return false - either way, it resolves the promise

    // we'll assume success and pass through a parsed JavaScript object from the JSON data we get
    let dataset = await resource.json();

    return dataset[0];
    
    
}

async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}


export { fetchData, postData };