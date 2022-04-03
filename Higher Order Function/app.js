const companies = [
    { id: 1, name: "One", category: "Food & Beverages", start: 2009, end: 2011, },
    { id: 2, name: "Two", category: "Retail", start: 1982, end: 2012, },
    { id: 3, name: "Three", category: "Finance", start: 2003, end: 2013, },
    { id: 4, name: "Four", category: "Technology", start: 2005, end: 2014, },
]

const ages = [33, 22, 20, 95, 12, 45, 23, 51, 23, 4]

// Foreach
// companies.forEach(data => {
//     console.log(data.name)
// })

// Filter
// const companiesLastedForTenYears = companies.filter(data => (data.end - data.start) >= 10)
// console.log(companiesLastedForTenYears)

// Loop
// const companyNames = companies.map(data => `${data.name} [${data.start} - ${data.end}]`)
// console.log(companyNames)

// sqrtAge = ages
// .map(data => Math.sqrt(data))
// .map(data => data * 2)
// console.log(sqrtAge)

// Sort, sort with return plus or a minus
// const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1)
// console.log(sortedCompanies);

// const sortAges = ages.sort() DOESN'T WORK BECAUSE IT WOULD LOOK AT THE BEGINING ONLY. so 45 and 5, 5 will be at the bottom
// const reverseSortAges = ages.sort((a,b) => b - a)
// console.log(reverseSortAges)

// Reduce
// const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// const totalRangeCompanies = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalRangeCompanies)

// Combination
 