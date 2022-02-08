"use strict"

let url =  gitHubAPI
fetch(url, {headers: {'Authorization': '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'}})
    .then(function(response) {
        console.log(response);
        return response.json();
    })