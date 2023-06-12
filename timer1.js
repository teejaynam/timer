const times = process.argv.slice(2).map(Number).filter(x => x > -1).sort((a, b) => a - b);
//convert strings to numbers, filter our negative numbers, then sort ascendingly

if (times.some(isNaN)) { //if at least one element is NaN, exit program
  console.log("Non numerical value detected, ending program");
} else {
  for (let i = 0; i < times.length; i++) { //loop through times array and play alarm or message through stdout
    setTimeout(() => {
      process.stdout.write(`beep at ${times[i]} seconds `);
      process.stdout.write('\x07');
    }, (times[i] * 1000));
  }
}