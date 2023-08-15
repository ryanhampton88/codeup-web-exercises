function logUser(input){
    if (typeof input !== 'string'){
        return false;
    }
    return `${input} has logged in for the day.`;

}

console.log(logUser("ryanhampton"));

console.log(logUser(2334));