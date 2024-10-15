console.log("Start!")

// Creo un ciclo for che stampi i numeri da 1 a 100
for (let i = 0; i < 100; i++) {

    // Salvo in una variabile ogni numero da stampare ad ogni ciclo
    let num = i + 1

    // Salvo in una variabile il resto delle divisioni per 3 e per 5
    let remainder3 = num % 3
    let remainder5 = num % 5

    // Controllo se il numero da stampare è divisibile per 3, per 5, entrambi o nessuno dei due e in base al risultato stampo rispettivamente: Fizz, Buzz, FizzBuzz o il numero stesso
    if (remainder3 === 0 && remainder5 !== 0) {
        console.log("Fizz!")
    } else if (remainder3 !== 0 && remainder5 === 0) {
        console.log("Buzz!")
    } else if (remainder3 === 0 && remainder5 === 0) {
        console.log("FizzBuzz!")
    } else if (remainder3 !== 0 && remainder5 !== 0) {
        console.log(num)
    }
}