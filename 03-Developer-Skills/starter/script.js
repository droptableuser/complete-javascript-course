// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees Celsius:')),
    value: 10,
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/
const Test = {
  Data1: [17, 21, 23],
  Data2: [12, 5, -5, 0, 4],
};

function printForecast(arr) {
  let finalString = '';
  arr.forEach((v, i) => {
    finalString += `... ${v}°C in ${i + 1} days `;
  });
  return finalString + '...';
}

console.log(printForecast(Test.Data1));

console.log(printForecast(Test.Data2));
