

function numRemainder() {
    let j = 0
    let arrayOfNumbers = []
    for (let i = 1; i <= 20; i++) {
        arrayOfNumbers.push[i]
    }
    const iterator = arrayOfNumbers.values()
    let div = []
    
    for (const values of iterator) {
        while (true) {
            
            j = j + 1
            div.push(j / values)
            if (div.every(Number.isInteger(div)) === true) {
                break;
            }
            
        }

    }
   return j
    
   
}
console.log(numRemainder())