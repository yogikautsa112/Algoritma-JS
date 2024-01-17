// For
for (let x = 1; x <= 50; x++ ) {
    if(x % 2 == 0){
        console.log( `${x} adalah bilangan genap`)
    } else {
        console.log(`${x} adalah bilangan ganjil`)
    }
}

// While
let  d = 1
while( d <= 50) {
    if ( d % 2 == 0) {
        console.log(`${d} adalah bilangan genap`)
    } else {
        console.log(`${d} adalah bilangan ganjil`)
    }
    d++;
}

// Do-While
let a = 1
do {
    if ( a % 2 == 0) {
        console.log(`${a} adalah bilangan genap`)
    } else {
        console.log(`${a} adalah bilangan ganjil`)
    }
    a++;
} while( a <= 50)

// Faktorial 

const number = Number(prompt('Enter a number'))
let factor = 1

for (let j = 1; j <= number; j++) {
    factor *= j
}console.log(`Menggunakan for : ${number} faktorial nya adalah ${factor}`)

const total = Number(prompt('Enter a number'))
let facto = 1
let x = 1

while(x <= total) {
    facto *= x
    x++;
} 
console.log(`Menggunakan while : ${total} faktorial nya adalah ${facto}`)

const num = Number(prompt('Enter a number'))
let fact = 1
let i = 1

do {
    fact *= i
    i++
} while (i <= num)
console.log(`Menggunakan do-while : ${num} faktorial nya adalah ${fact}`)

