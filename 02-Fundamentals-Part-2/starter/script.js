'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')


function logger() {
  console.log('My name is Markus');
}

logger();
logger();


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1)

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2)
//ArrowFunction
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));
console.log(yearsUntilRetirement(1988, 'Markus'))



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3))


const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log("No one wins!")
  }
}
checkWinner(calcAverage(42, 23, 71), calcAverage(65, 54, 49))
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))

const friends = ['michael', 'steven', 'peter']

const y = new Array(1991, 1984, 2008, 2020)

console.log(friends[friends.length - 1])

friends[2] = 'Jay';

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends]

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages)



const friends = ['michael', 'steven', 'peter'];
//Add Elements
friends.push('Jay');
friends.unshift('John');
console.log(friends)

//remove
friends.pop();
const popped = friends.pop();
friends.shift()
console.log(friends, popped);

console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob"));

console.log(friends.includes("steven"));
console.log(friends.includes("bob"));



function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
console.log(calcTip(100));
const bills = [125, 555, 44];

const tips = bills.map((v, i) => calcTip(v));

const total = bills.map((v, i) => v + tips[i]);


const markus = {
  firstName: 'Markus',
  lastName: 'drptblsr',
  age: 2037 - 1991,
  job: 'cybersecurity consultant',
  friends: ['imy', 'pepper']
};

//console.log(markus.lastName);

const interestedIn = prompt("What do you want to know about markus? Choose between firstName, lastName, age, job and friends?");

if (markus[interestedIn]) {
  console.log(markus[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job and friends?")
}

console.log(`${markus.firstName} has ${markus.friends.length} friends, and his best friend is called ${markus.friends[0]}.`)



const markus = {
  firstName: 'Markus',
  lastName: 'drptblsr',
  birthYear: 1990,
  job: 'cybersecurity consultant',
  friends: ['imy', 'pepper'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`;
  }
};

console.log(markus.getSummary())

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
console.log(`${john.calcBmi() > mark.calcBmi() ? john.firstName : mark.firstName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is higher than ${john.bmi < mark.bmi ? john.firstName : mark.firstName}'s (${john.bmi < mark.bmi ? john.bmi : mark.bmi})!`);


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['michael', 'steven', 'peter'],
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 2018, 2021];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages)

//continue and break
console.log("---- ONLY STRINGS -----")
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);

}

console.log("---- BREAK ON NUMBER ----")
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);

}

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['michael', 'steven', 'peter'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`)
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`)
  }
}
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`)
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(totals, tips);
console.log(calcAverage(totals));
