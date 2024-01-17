// 1 
let beratBuah = Number(prompt('Berat Buah : '))
let hargaPerKilo = 5000
let hargaAwal = beratBuah * hargaPerKilo
let diskon = 0.05 
let setelahDiskon = diskon * hargaAwal
let harusDibayar = hargaAwal - setelahDiskon

document.write(`sebelum diskon ${hargaAwal} <br/>`)
document.write(`diskon ${diskon} <br/>`)
document.write(`setelah Diskon ${setelahDiskon} <br/>`)
document.write(`harga yang harus dibayarkan ${harusDibayar} <br/>`)

// 2
const number = Number(prompt("Masukkan bilangan bulat: "));

const ribuan = Math.floor ( number % 10000 / 1000)
const ratusan = Math.floor( number % 1000 / 100)
const puluhan = Math.floor( number % 100 )
const satuan = Math.floor (number % 10 )

document.write(`${ribuan} ribuan ${ratusan} ratusan ${puluhan} puluhan ${satuan} satuan`)

// 3
let temp = Number(prompt('Input temperatur'))
let f = (temp - 32) * (5/9) 
let kondisiCuaca;

if (f >= 300) {
    kondisiCuaca = 'Panas'
} else if ( f <= 250) {
    kondisiCuaca = "Dingin"
} else if ( f > 250 && f < 300) {
    kondisiCuaca = "Normal"
}

document.write(`<br/> Suhu sekarang adalah ${f}C dan kondisi cuaca nya ${kondisiCuaca}`)