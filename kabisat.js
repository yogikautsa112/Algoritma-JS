// For
for(let thn = Number(prompt('Input Tahun')); thn <= 2024 ; thn += 4) {
    if ( thn % 4 === 0 && (thn % 100 !== 0 || thn % 400 === 0)) {
        console.log(`${thn} ini tahun kabisat`)
    } else {
        console.log(`${thn} bukan tahun kabisat`)
    }
}

// While
let kabisat = Number(prompt('Input Tahun : '))

while( kabisat <= 2024 ) {
    if ( kabisat % 4 === 0 && (kabisat % 100 !== 0 || kabisat % 400 === 0)) {
        console.log(`${kabisat} ini tahun kabisat`)
    } else {
        console.log(`${kabisat} bukan tahun kabisat`)
    }
    kabisat += 4
}


// do-while
let tahun = Number(prompt('Input Tahun : '))

do {
    if ( tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)) {
        console.log(`${tahun} ini tahun kabisat`)
    } else {
        console.log(`${tahun} bukan tahun kabisat`)
    }
    tahun += 4
} while ( tahun <= 2024 )
