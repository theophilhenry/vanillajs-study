const result = {
    success: ['max-length', 'no-amd', 'prefer-arrow-function'],
    failure: ['no-var', 'var-on-top', 'linebreak'], // failure: ['hey']
    skipped: ['id-blacklist', 'no-dup-keys'],
    data: { start: 1990, end: 1991 }
}

// const makeList = arr => arr.map(obj => `<li class="text-warning">${obj}</li>`)

// ['success','failure','skipped']

// const changeToHey = (key) => {
//     result[key] = ['hey']
// }

const { data: { start: dataStart, end: dataEnd }, failure: [ a, ...rest ] } = result

console.log(rest)

// console.log(makeList(result.failure))
