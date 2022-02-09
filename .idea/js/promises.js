"use strict"

// let url =  gitHubAPI
// fetch(url, {headers: {'Authorization': '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'}})
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })



//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function wait (num){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}(() => console.log('runs after 3 seconds'));