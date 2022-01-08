console.log("Lets practice some object methods");
//Here are some methods that work with objects.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: '1991',
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};

//Any function that is attatched to an object is called
//a METHOD
//Just use a function expression and the name becomes a key value pair
//A function declaration wont work however

console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));