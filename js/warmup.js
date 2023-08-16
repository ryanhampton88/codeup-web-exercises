let userObject = {
    userName: "ken2cool",
    userEmail: "ken2cool@yahoo.com"
};


console.log(userObject.userName);
console.log(userObject.userEmail);

function logUser(){
    if (typeof userObject.userName !== 'string') {
        return false;
    }
    return `${userObject.userName} with email ${userObject.userEmail} has logged in for the day.`;
}

console.log(logUser(userObject));


userObject.userRoles = [ "admin", "moderator", "buyer", "seller", "reviewer"];

console.log(userObject.userRoles);

userObject.userProfile = {
    userProfileUrl: "myProfileLink",
    userAge: 31,
    userLocation: "San Antonio"
}

console.log(userObject.userProfile);