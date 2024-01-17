// No 1

let nama = prompt("Masukan nama anda")
let gajiPokok = prompt("Masukan gaji anda")
const tunj = 0.20 * parseInt(gajiPokok)
const pjk = 0.15 * (parseInt(gajiPokok) + tunj)
const gajiBersih = parseInt(gajiPokok) + tunj - pjk

document.write(`Nama Karyawan : ${nama}, <br/>Tunjangan nya adalah ${tunj}, <br/>pajak nya adalah ${pjk}, <br/>jadi gaji bersih ${nama} adalah ${gajiBersih}`)


// No 2
let j = prompt('Masukan Jam :')
let m = prompt('Masukan Menit :')
let d = prompt('Masukan Detik :')

const totalDetik = parseInt(j) * 3600 + parseInt(m) * 60 + parseInt(d)

document.write(`${totalDetik} Detik `)

// No 3

let ttlDetik = prompt('Masukan total detik :')

let jam = Math.floor(ttlDetik / 3600)
let sisaDetik = ttlDetik % 3600
let menit = Math.floor(sisaDetik / 60)
let detik = sisaDetik % 60

document.write(`${ttlDetik} detik adalah : ${jam} jam ${menit} menit ${detik} detik`)