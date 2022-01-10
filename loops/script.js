console.log('Lets learn about loops! Uncomment the code on line 3 and at the bottom to execute');

/*
    // This is a basic for loop 
    for(let rep = 1;rep <= 10; rep ++) {
        console.log(`Lifting weights repetition ${rep}`)
    };

    //Its is structured like this:

    for()
    let rep = 1 (Where is the loop beginning?) ** At 1 in this case
    rep <= 10 (Where will it stop) ** When rep is = or greater than 10
    rep ++ (How will it get there?) ** By adding 1 to rep each time with ++ 

    The loop keeps running while the condition is TRUE

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

    //So i needs to be 0 in this case. Because arrays start at 0.

    //we use the .length property so that the number of
    //items on the list is calcualted by the length of the array
    //instead of being hard coded in.

    ///////////////////////////////////////////////////////

    //Let's create an array that identifies the type of data for each entry.

    const types = []; //<--- Here we create an empty array that we'll fill with our types.

    for(let i = 0; i < jonas.length; i++) {
        //Reading from the jonas array
        console.log(jonas[i], typeof jonas[i]);

        // types[i] = typeof jonas[i]; //<--- Here we're filling the types array with the data that the loop produced.

        //We can also use the .push method to fill up the empty types array:
        types.push(typeof jonas[i]); //<---This way seems to be a little cleaner.
    }

    console.log(types);


    //////////////////////////////////////////////////////////////////////////////


    // ************* IMPORTANT *****************

    //Lets try another more practical example (timestamp 12:40)

    //Calculate the ages for these four birth years and store them into a new array:
    const birthYears = [1991, 2007, 1969, 2020];
    const ages = []

    for(let i = 0; i < birthYears.length; i++) {
        ages.push(2022 - birthYears[i]);
    }
    console.log(ages);

    /////////////////////////////////////////////////////////////////////////////

    //Next, lets learn about the CONTINUE & BREAK statements. Timestamp 16:39

    //CONTINUE - To exit the current interation of the loop, and continue to the next one.
    //BREAK - To completely terminate the loop

    ///////////////////////////////////////////////////

    console.log('--- Only Strings ---')
    //Print out the elements that are strings from the jonas array using the CONTINUE keyord:
    for(let i = 0; i < jonas.length; i++) {
        if(typeof jonas[i] !== 'string') continue //If the type of jonas is not = to string 
        //then skip that entry and continue looping

        console.log(jonas[i], typeof jonas[i]);
    }

    //End the loop once a number has been found with BREAK
    console.log('--- BREAK AFTER WITH NUMBER ---');
    for(let i = 0; i < jonas.length; i++) {
        if(typeof jonas[i] === 'number') break //If the type of jonas is = to number 
        //then stop/break the loop

        console.log(jonas[i], typeof jonas[i]); 
    }
*/  ///////////////////////////////////////////////////////////
    
    //Looping backwards






