const movies = [
    { id: 1, name: 'Batman : The Dark Night', release: '2007', price: '20000', selling:true, },
    { id: 2, name: 'Spiderman : No Way Home', release: '2020', price: '50000', selling:false, },
    { id: 3, name: 'Avengers : End Game', release: '2019', price: '35000', selling:true, },
    { id: 4, name: 'Avengers : Infinity War', release: '2018', price: '32000', selling:true, },
    { id: 5, name: 'WHAT IF', release: '2021', price: '55000', selling:false, },
]

// Function to add movies
const storeItem = movie => [...movies, {id: 6, ...movie}]
movies = storeItem({ name: "New Movie", release: "2022", price: "100000" })
console.log(movies)

// Function to add movies (using push) and changing the variable movies
const storeItem = movie => movies.push({id:6, ...movie})
storeItem({ name: "New Movie", release: "2022", price: "100000" })
console.log(movies)

// Function to toggle selling ON/OFF for ID 1
const toggleSelling = id => movies.map(movie => movie.id === id ? {...movie, selling: !movie.selling} : movie)
const newToggled = toggleSelling(1)
console.log(newToggled)

// Function to remove id from movies
const removeItem = id => movies.filter(movie => movie.id != id)
const hasil = removeItem(2)
console.log(hasil)

// Combination : 
// Sorted names of the movies which release after 2019, with the information of square rooted price
const arr = movies
    .filter(movie => movie.release >= 2019)
    .map(movie => {return {...movie, price: movie.price * 2}})
    .sort((a,b) => a.release - b.release)
    .reduce((a,b) => a + `${b.name} [ ${b.release} - Rp. ${b.price} ]\n`, '')

console.log(arr)