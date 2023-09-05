// Oppgave 1
let musikkInstrumenter = ["Trombone", "Eufonium", "Trompet", "Tverrfløyte", "Klarinett", "Bariton", "Tuba", "Piano", "Gitar", "Saxofon"]

let roundedNumber = Math.round(Math.random() * 9)
console.log(musikkInstrumenter.pop())
musikkInstrumenter.push("Kornett")
console.log(musikkInstrumenter[roundedNumber])

// oppgave 1.1
console.log(`Dette er Index 5: ${musikkInstrumenter[5]} `)

// oppgave 2
const Character = [{

    firstname: "Luffy",
    lastname: "Monkey",
    age: 19,
    hobbies: ["Fighting", "Eating", "Exploring"]
},
{
    firstname: "Fred",
    lastname: "Flintstone",
    age: 44,
    hobbies: ["Bowling", "Poker", "Pool"]
}
]
console.log(Character[0].firstname)
console.log(Character[0].lastname)
console.log(Character[0].hobbies)
console.log(Character[1].firstname)
console.log(Character[1].lastname)
console.log(Character[1].hobbies)


// oppgave 3
let alder = 18
alder <= 117 ? console.log("Du kan kjøpe tobakk") : console.log("Du er for ung til å kjøpe tobakk")