// No 1
const PABP = 70 
const MTK = 82
const DPK = 77

let RataRata = (PABP + MTK + DPK)/3

if (RataRata >= 80 && RataRata < 100 ) {
    result =  "Grade A"
}else if (RataRata >= 75 && RataRata < 80) {
    result  = "Grade B"
}else if (RataRata >=65 && RataRata < 75) {
    result = "Grade C"
}else if (RataRata >=45 && RataRata < 65) {
    result = "Grade D"
}else if (RataRata >=0 && RataRata < 45){
    result = "Grade E"
}else {
    result = "Grade K"
}

// No 2 
const input = Number(prompt('Masukan kode pegawai (11 digit) : '))

const golongan = Math.floor(input % 100000000000 / 10000000000)
const tgl = Math.floor(input % 10000000000 / 100000000)
const bln = Math.floor(input % 100000000 / 1000000)
const thn = Math.floor(input % 1000000 / 100)
const nn = Math.floor(input % 10000)

if (golongan >=1 && golongan <= 4) {
    let bulanName;
    switch(bln) {
        case 1: bulanName = 'JAN'; break;
        case 2: bulanName = 'FEB'; break;
        case 3: bulanName = 'MAR'; break;
        case 4: bulanName = 'APR'; break;
        case 5: bulanName = 'MEI'; break;
        case 6: bulanName = 'JUN'; break;
        case 7: bulanName = 'JUL'; break;
        case 8: bulanName = 'AGU'; break;
        case 9: bulanName = 'SEP'; break;
        case 10: bulanName = 'OKT'; break;
        case 11: bulanName = 'NOV'; break;
        case 12: bulanName = 'DES'; break;
        default: bulanName = 'Invalid';
    } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, 
    lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${nn}`)
} else {
    console.log('Golongan tidak valid.')
}

// No 3
let j = Number(prompt('Input Jam : '))
let m = Number(prompt('Input Menit : '))
let d = Number(prompt('Input Detik : ')) + 1;

let hasilM = m

if (d > 59) {
    d = 0
    hasilM = m + 1
}
if (hasilM > 59) {
    hasilM = 0
    j = j + 1
}
if (j > 23) {
    j = 0
    hasilM = 0
    d = 0
}

console.log(`${j}:${hasilM}:${d}`)
