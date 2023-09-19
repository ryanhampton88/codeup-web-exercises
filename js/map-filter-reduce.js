const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWithThreeOrMoreLanguages = users.filter(function(n) {
        return n.languages.length >= 3;
});
console.log(usersWithThreeOrMoreLanguages);



let usersEmails = users.map(function(n) {
    return n.email;
});
console.log(usersEmails);



let totalExperience = users.reduce(function(totalYears, person){
    return totalYears + person.yearsOfExperience;
}, 0);
console.log(totalExperience);
console.log(`The average years of experience is ${totalExperience / users.length}`);


let longestEmail = users.reduce(function(person, winningEmail){
    if ( person.email.length > )


    return
})