console.log('Lets learn about loops!');


/* This is a basic for loop */
for(let rep = 1;rep <= 10; rep ++) {
    console.log(`Lifting weights repetition ${rep}`)
};

/*Its is structured like this:

for()
let rep = 1 (Where is the loop beginning?) ** At 1 in this case
rep <= 10 (Where will it stop) ** When rep is = or greater than 10
rep ++ (How will it get there?) ** By adding 1 to rep each time with ++ 

The loop keeps running while the condition is TRUE*/

/////////////////////////////////////////////////////////////////////////////////


//  *** Using the FOR loop  to loop through an array *** 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//Lets try logging each element to the console:

for(let i = 0; i < jonas.length; i ++) {
    console.log(jonas[i], typeof jonas[i]);
}

// This is the code we want to happen:
    //console.log(jonas[0]);
    //console.log(jonas[1]);
    //console.log(jonas[2]);

//So i to be 0 in this case. Because arrays start at 0.

//we use the .length property so that the number of
//items on the list is calcualted by the length of the array
//instead of being hard coded in.

///////////////////////////////////////////////////////

//Let's create an array that identifies the type of data for each entry.

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i]; 

}



