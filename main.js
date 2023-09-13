// early adults receive race number at or above 1000
// all other receive a number below 1000

// Adult registrants run
// Early Adults run 9:30
// Late adults 11:00
//youth registrants all run at 12:30

//adults at age over 18

let raceNumber = Math.floor(Math.random() * 1000 )
console.log(raceNumber)
let earlyRegistration = true
let age = 2

if (age > 18 && earlyRegistration === true) {
    raceNumber += 1000
    console.log(raceNumber)
}

if (age > 18 && earlyRegistration === true) {
    console.log(`You will be racing at 9:30.  Your race Number is ${raceNumber}`)
} else if (age > 18 && earlyRegistration === false) {
    console.log(`You will be racing at 11:00 your race number is ${raceNumber}.`)
} else {
    console.log(`You will be racing at 12:30. Your race number is ${raceNumber}.`)
}
