// 0.1
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']

const result = names.filter(checkName)
console.log("original:")
names.forEach(eachName)

console.log() // for space in the terminal

console.log("filtered: ")
result.forEach(eachName)

function eachName(name) {
    console.log(name)
}

function checkName(name) {
    return name.length <= 3
}

// 0.2

const newArr = names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
console.log(newArr)

// 0.3

function createHtml(names) {
    
    const listItems = names.map(name => `<li>${name}</li>`).join(''); // string interpolation
    
    return `<ul>${listItems}</ul>`;
}

console.log(createHtml(names))


// 0.4

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
// Cars newer than 1999
  function carsNewerThan(car) {
    return car.year <= 1999
  }
  
  const filterYear = cars.filter(carsNewerThan)

    console.log()
    console.log(filterYear)

// All Volvo’s

function carsVolvo(car) {
    return car.make === "Volvo"
}

const filterVolvo = cars.filter(carsVolvo)

console.log()
console.log(filterVolvo)

// All cars with a price below 5000

function carsPrice(car) {
    return car.price <= 5000
}

const filterCarPrice = cars.filter(carsPrice)

console.log()
console.log(filterCarPrice)


// 0.4.2
function createSqlInsertStatements(cars) {
    const sqlStatements = cars.map(car => {
        const values = Object.values(car).map(value => typeof value === 'string' ? `'${value}'` : value);
        return `INSERT INTO cars (id, year, make, model, price) VALUES (${values.join(', ')});`;
    });
    return sqlStatements.join('\n');
}

const sqlInsertStatements = createSqlInsertStatements(cars);
console.log(sqlInsertStatements);

