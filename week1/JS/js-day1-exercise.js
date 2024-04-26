let names = ["Lars", "Peter", "Jan", "Bo"]


// 1.1.2
function myFilter(array, callback) {
    let filteredArray = []; 
    for (let element of array) {
        if (callback(element)) {
            filteredArray.push(element); 
        }
    }
    return filteredArray;
}

function nameLength(name) {
    return name.length >= 4;
}

let filteredNames = myFilter(names, nameLength);
console.log(filteredNames); 
