// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "
// Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// — What is temperature amplitude?
//  Its the difference between the highest temp and the lowest.
// — How do I compute min/max temperatures?

// — What should I do with the error? What is it?
// Probably ignore it.

// 2) Breaking up into sub-problems
// How to ignore the error and work with the remaining data
// Calculate the Max temp
// calculate the Min temp
// Subtract min from max and return it (Find the amplitude)

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//PROBLEM 2:
//Function should now recieve two arrays.

// 1) Understanding the problem:

// With two arrays, do we implement the functionality twice?
//NO, just merge the two arrays at the beginning

// 2) Breaking the problem down:
// How to merge two arrays?

*/
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    //value: Number(prompt('Degrees Celsius')), //Prompt always returns a string so its producing a bug
  };

  // B) Find the bug
  console.table(measurement);

  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug
// — bug occurs on 67
console.log(measureKelvin());

////////////////////////////////////////////////////////

//Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify Bug
console.log(amplitudeBug);
