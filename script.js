// Oppgave 1
let musikkInstrumenter = ["Trombone", "Eufonium", "Trompet", "Tverrfløyte", "Klarinett", "Bariton", "Tuba", "Piano", "Gitar", "Saxofon"]

let roundedNumber = Math.round(Math.random() * 9)
console.log(musikkInstrumenter.pop())
musikkInstrumenter.push("Kornett")
console.log(musikkInstrumenter[roundedNumber])

// oppgave 1.1
console.log(`Dette er Index 5: ${musikkInstrumenter[5]} `)

// oppgave 2
const person = {
    firstname: "Magnus",
    lastname: "Bergersen",
    age: 23,
    hobbies: ["Trombone", "Manga", "Gaming"]}
const Magnus= person[0]
console.log(person[0].firstname)

