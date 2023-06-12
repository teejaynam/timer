const times = process.argv.slice(2); //2 + are the in line args

let timesSorted = times.map(x => Number(x)); //convert strings to numbers
timesSorted = timesSorted.filter((x) => x > -1); //filter out negative numbers
timesSorted.sort(function(a, b) { //sort numbers ascendingly 
  return a - b;
});

if (timesSorted.some(isNaN)) { //if at least one element is NaN, exit program
  console.log("Non numerical value detected, ending program");
} else {
  for (let i = 0; i < timesSorted.length; i++) { //loop through times array and play alarm or message through stdout
    setTimeout(() => {
      process.stdout.write(`beep at ${timesSorted[i]} seconds `);
      process.stdout.write('\x07');
    }, (timesSorted[i] * 1000));
  }
}