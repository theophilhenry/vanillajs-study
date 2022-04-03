// const myCompany = { id: 1, name: "One", category: "Food & Beverages", active: { start: 1990, end: 2020 } }

// const getEnd = company => {
//     const { active : { end : data } } = myCompany
//     return data
// }

// console.log(getEnd(myCompany))


const companies = [
    { id: 1, name: "One", category: "Food & Beverages", active: { start: 1990, end: 2020 } },
    { id: 2, name: "Two", category: "Food & Beverages", active: { start: 1988, end: 2018 } },
    { id: 3, name: "Three", category: "Food & Beverages", active: { start: 1990, end: 2013 } },
]

// const getEndCompanies = companies => {
//     return companies
//         .map(company => {
//             const { active: { end: data } } = company
//             return data
//         })
//         .sort((a, b) => a - b)
// }
const getEndCompanies = companies => {
    return companies
        .map(({ active : { end, start } }) => `${start} - ${end}`)
        .sort((a, b) => a - b)
}

console.log(getEndCompanies(companies))