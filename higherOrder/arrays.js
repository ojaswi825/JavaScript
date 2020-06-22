const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// general syntax of higher order array functions:
// companies.forEach(function(company, index, companies) {
//     console.log(company);
// });
// here index and companies are optional. company is an iterator

// foreach
companies.forEach(function(company) {
    console.log(company);
    console.log(company.category);
});

// filter returns an array
const canDrink = ages.filter(function(age){
    if (age >= 22)  return true;
});

console.log(canDrink);

// filter using lambda
const drinkable = ages.filter(age =>  age >= 22);
console.log(drinkable);

// filter the retail companies
const retails = companies.filter(company => company.category === 'Retail');
console.log(retails);

// filter the '80s companies
const eighties = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eighties);

// filter the companies that lasted at least 10 years
const lasted =  companies.filter(company => (company.end - company.start >= 10));
console.log(lasted);

// map returns an array of wanted properties

// create array of comapany names with start and end date
const names = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(names);

// square all ages
const squared = ages.map(age => age*age);
console.log(squared);

// square all ages and multiply by 2
const squared2 = ages.map(age => age*age).map(age2 => age2*2);
console.log(squared2);

// sort -> takes two values and compare them like c++ comparator
// -1 for condition satisfied and 1 for opposite
const sortedCompanies = companies.sort((company1, company2) => (company1.start < company2.start ? -1: 1));
console.log(sortedCompanies);

// sort ages 
const sortedAges = ages.sort(); // sorts on basis of first digit only
console.log(sortedAges);    // can see 5 at some odd position

// sort ages the correct way
const sortedAgesCorrect = ages.sort((a, b) => a-b);
console.log(sortedAgesCorrect);

// sort the ages in descending order
const agesDesc = ages.sort((a, b) => b-a);
console.log(agesDesc);

// reduce -> reduces an array based on a criteria (function)

// let sum = 0;
// for (let i=0; i<ages.length; i++)   sum += ages[i];
// console.log(sum);


// reduce takes 3 parameters: total to start add to, age and lastly 0 for initial value
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// add only even ages
const ageEven = ages.filter(age => age % 2 == 0).reduce((total, eage) => total + eage, 0);
console.log(ageEven);

// get total years of all company
const years = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(years);

// combined
// ages times 2 then add

const age2add = ages.map(age => age*2).reduce((total, age2) => total + age2, 0);
console.log(age2add);

// age times 2 less than 40
const age2lt40 = ages.map(age => age*2).filter(age2 => age2 < 40).sort((a, b) => a-b);
console.log(age2lt40);

const finalSum = age2lt40.reduce((total, age) => total + age, 0);
console.log(finalSum);