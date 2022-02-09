"use strict"

function getGitUsername(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': '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'}})
        .then(function(response) {
            console.log(response);
            return response.json();
        })
}





function wait (num){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}(() => console.log('runs after 3 seconds'));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(2000).then(() => console.log('You\'ll see this after 2 seconds'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));