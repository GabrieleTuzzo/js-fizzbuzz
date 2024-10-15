console.log("Start!")

// Creo un ciclo for che stampi i numeri da 1 a 100
for (let i = 0; i < 100; i++) {

    // Salvo in una variabile ogni numero da stampare ad ogni ciclo
    let num = i + 1

    // Salvo in una variabile il resto delle divisioni per 3 e per 5
    let remainder3 = num % 3
    let remainder5 = num % 5

    // Inizializzo variabili booleane per il controllo del resto
    let isRem3Zero = false
    let isRem5Zero = false

    // Modifico il contenuto delle variabili booleane in base al contenuto
    if (remainder3 === 0) {
        isRem3Zero = true
    } else {
        isRem3Zero = false
    }

    if (remainder5 === 0) {
        isRem5Zero = true
    } else {
        isRem5Zero = false
    }

    // Controllo se il numero da stampare è divisibile per 3, per 5, entrambi o nessuno dei due e in base al risultato stampo rispettivamente: Fizz, Buzz, FizzBuzz o il numero stesso
    // Utilizzo le variabili booleane per una migliore leggibilità del codice
    if (isRem3Zero && !isRem5Zero) {
        console.log("Fizz!")
    } else if (!isRem3Zero && isRem5Zero) {
        console.log("Buzz!")
    } else if (isRem3Zero && isRem5Zero) {
        console.log("FizzBuzz!")
    } else if (!isRem3Zero && !isRem5Zero) {
        console.log(num)
    }
}