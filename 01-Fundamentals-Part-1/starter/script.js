/*
let country = 'Austria';
let continent = 'Europe';
let population = 8.9;

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof 23);
console.log(typeof javascriptIsFun);
// console.log(typeof 'drptblsr');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year);

year = 2021;
console.log(typeof year);

console.log(typeof null)

let age = 30;
age = 31;


const birthYear = 1988;


var job = 'programmer';
job = 'cybersecurity consultant'


const now = 2037
const ageMarkus = now - 1988;
const ageHerb = now - 2022;

console.log(ageMarkus, ageHerb);

console.log(ageMarkus * 2, ageMarkus / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2^3


const firstName = 'Markus';
const lastName = 'drptblsr';

console.log(firstName + ' ' + lastName);

//assignment operators

let x = 10 + 5
x += 5; // 10+5+5 = 20
x *= 4; // 20*4 = 80
x++; // 80+1 = 81;
x--; // 81-1= 80
x--; // 80-1 = 79
console.log(x)

//Comparison operators
console.log(ageMarkus > ageHerb);
console.log(ageHerb >= 18);

const isHerbFullAge = ageHerb >= 18;

function BMI(height, mass) {
  return mass / height ** 2;

}

function compareBmi(heightMark, weightMark, heightJohn, weightJohn) {
  const bmiMark = BMI(heightMark, weightMark);
  const bmiJohn = BMI(heightJohn, weightJohn);
  const markHigherBMI = bmiMark > bmiJohn;
  if (markHigherBMI) {
    console.log(` Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
  } else {
    console.log(` John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
  }
}
// test data 1
let heightMark = 1.69;
let weightMark = 78;
let heightJohn = 1.95;
let weightJohn = 92

console.log("Test Data 1");
compareBmi(heightMark, weightMark, heightJohn, weightJohn);

heightMark = 1.88;
weightMark = 95;
heightJohn = 1.76;
weightJohn = 85;

console.log("Test Data 2");
compareBmi(heightMark, weightMark, heightJohn, weightJohn);
/*
const firstName = 'drptblsr';
const job = 'cybersec consultant';
const birthYear = 1988;
const year = 2037;

const markus = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + "!";
console.log(markus);

const markusNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(markusNew);
console.log(`Just a regular string ...`);

console.log('String with \n\
multiple lins \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;


if (age >= 17) {
  console.group('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}


const birthYear = 1988;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//type conversion
const inputYear = '1991';

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Markus'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / 2);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("joans"));
console.log(Boolean({}));
console.log(Boolean(''));

const money= 0;

if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("Yay! Height is defined!")
} else {
  console.log("Height is UNDEFINED!")
}


const age = 18;

if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite)

if (favourite === 13) {
  console.log('Cool! 13 is an amazing number!')
} else if (favourite === 7) {
  console.log('Ok 7 is also a cool number')
} else {
  console.log('Number is not 13 or 7')
}

if (favourite !== 13) {
  console.log('Why not 13 tho?')
}


const hasDriversLicense = true;
const hasGoodVision = true;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive!');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive!');
}

function average(scores) {
  let sum = 0;
  scores.forEach(element => {
    sum += element;
  });
  return sum / scores.length;
}

function winner(Team1, Team2) {
  const average1 = average(Team1.score);
  const average2 = average(Team2.score);

  if (average1 > average2 && average1 > 100) {
    console.log(`Team ${Team1.name} won the competition`);
  } else if (average1 < average2 && average2 > 100) {
    console.log(`Team ${Team2.name} won the competition`);
  } else if (average1 > 100 && average2 > 100 && average1 === average2) {
    console.log("It is a draw")
  } else {
    console.log("no one wins")
  }
}

const Score1 = { "name": "dolphins", "score": [96, 108, 89] };
const Score2 = { "name": "koalas", "score": [88, 81, 110] };

winner(Score1, Score2);
const Score3 = { "name": "dolphins", "score": [97, 112, 101] };
const Score4 = { "name": "koalas", "score": [109, 95, 123] };

winner(Score3, Score4);
const Score5 = { "name": "dolphins", "score": [97, 112, 101] };
const Score6 = { "name": "koalas", "score": [109, 95, 106] };

winner(Score5, Score6);



const day = 'monday';
switch (day) {
  case 'monday':
    console.log("Plan course structure");
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos!');
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy weekend');
  default:
    console.log('not a valid day!')
}

if (day === 'monday') {
  console.log("Plan course structure");
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos!');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('enjoy weekend');

} else {
  console.log('not a valid day!')
}


const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('i like to drink water ')

const age = 23;
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink)

const age = 23;
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
const bill = 430;
const tip = bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}.`);