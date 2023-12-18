// 1.Mencari Keliling Persegi Panjang
// Memasukan nilai panjang,lebar
// Menghitung rumus: 2*P + 2*L
// Menampilkan Hasil// // Memasukan nilai panjang,lebar
// let panjang = 150; 
// let lebar = 40;

// // Menghitung Rumus
// let hasil = 2 * panjang + 2 * lebar;

// // Menampilkan 
// console.log( "Keliling persegi panjang adalah: " + hasil)

// // 2.Luas Lingkaran 

// // Tentukan phi dan r
// let phi = 3.14;
// let r = 10;

// // Proses
// let hasilL = phi * r * r;

// // Menampilkan hasil
// console.log("Hasil nya: " + hasilL)

// let Lp = 64;

// let sisi = Math.sqrt(Lp);

// let hasilNya = 4 * sisi;

// console.log (hasilNya)

// // syarat umur membuat KTP
// // input
// let umur = 17;

// // proses/ logika
// if(umur >= 17){
//     result= "Membuat KTP";
// } else {
//     result = "Belum bisa membuat KTP"
// }

// // output
// console.log(result)

// // Soal 1 

// // Input nilai 

// let PABP = 86
// let MTK = 82
// let DPK = 77

// let RataRata = (PABP + MTK + DPK)/3

// if (RataRata >= 80 && RataRata < 100 ) {
//     result =  "Grade A"
// }else if (RataRata >= 75 && RataRata < 80) {
//     result  = "Grade B"
// }else if (RataRata >=65 && RataRata < 75) {
//     result = "Grade C"
// }else if (RataRata >=45 && RataRata < 65) {
//     result = "Grade D"
// }else if (RataRata >=0 && RataRata < 45){
//     result = "Grade E"
// }else {
//     result = "Grade K"
// }

// console.log(RataRata)
// console.log(result)

// // Luas Segitiga 

let alas = 12
let tinggi = 15

const hasilSegiTiga = 1/2 * alas * tinggi

console.log(`Luas Segitiga adalah ${hasilSegiTiga}`)


// // Keliling Lingkaran 

let r = 10
let d = r * 2

let hasilLingkaran = Math.round(3.14 * d) 

console.log(`Keliling Lingkaran adalah  ${hasilLingkaran}`)

// //  Persegi Panjang 

let p = 40
let l = 25

let hasilPersegiPanjang = p * l 

console.log(`Luas Persegi Panjang adalah ${hasilPersegiPanjang}`)

// // Jam ke  menit 

let jam = 12

let hasil = jam * 60

console.log(`Jam ${jam} ke Detik adalah ${hasil}`)

// // Jam ke detik

let jam1 = 7

let hasil1 = jam1 * 3600

console.log(`Jam ${jam1} ke Detik adalah ${hasil1}`)

// // Nilai kompeten 

function kompeten(nilai) {
    if (nilai >= 75) {
        return "Kompeten"
    }else {
        return "Tidak Kompeten"
    }
}

console.log(kompeten(82))

// // Penjumlahan 2 angka 

let bil_1 = 5
let bil_2 = 6

let hasilBilangan = bil_1 + bil_2

console.log(`Hasil ${bil_1} ditambah ${bil_2} adalah ${hasilBilangan}`)

// // KM -> M 

let km = 143

let hasilKm = km * 1000

console.log(`${km} ke M adalah ${hasilKm}`)

// // KG -> G 

let kg = 7

let hasilKg = kg * 1000

console.log(`${kg} ke G adalah ${hasilKg}`)

// No 1

let a = 10
let b = 30
let c = 100

if (a > b && a > c) {
    hasil = "Bilangan satu paling besar"
}else if (b > c && b > a) {
    hasil = "Bilangan dua paling besar" 
}else {
    hasil = "Bilangan tiga paling besar"
}

console.log(hasil)

// No 2

let number = -2

if (number >= 0) {
    hasilNya = "Positif"
}else if (number < 0) {
    hasilNya = "Negatif" 
}else {
    hasilNya = "Eror"

}if (number % 2 == 0) {
    hasilNya2 = "Genap"
}else if (number % 2 == 1) {
    hasilNya2 = "Ganjil"
}else {
    console.log("Eror")
}

console.log(`Jadi bilangan ${number} adalah bilangan ${hasilNya} dan ${hasilNya2}`)



// No 3 

let saklar = 0

if (saklar == 0) {
    hasil = "OFF"
}else if (saklar == 1) {
    hasil = "ON" 
}else {
    hasil = "rusak"
}

console.log(hasil)

// No 4 

let barang_1 = 50000
let barang_2 = 30000
let barang_3 = 100000

let totalHarga = barang_1 + barang_2 + barang_3

if (totalHarga > 100000) {
    let diskon = 10/100 * totalHarga;
    let setelahDiskon = totalHarga - diskon;
    console.log("Total belanja anda adalah" + totalHarga)
    console.log("Karena total belanja anda di atas 100000, jadi anda mendapat diskon 10%!")
    console.log("Jadi total yang harus anda bayar adalah" + setelahDiskon)
}else {
    console.log("Harga total barang anda adalah" + "" + totalHarga )
    console.log("Maaf anda tidak mendapatkan diskon")
}

// No 5

let jamLembur = 10

if (jamLembur < 6 ) {
    console.log ("Gaji anda Rp. 100.000,")
}else if (jamLembur == 6) {
    console.log ("Gaji anda Rp. 200.000,")
}else if (jamLembur > 6) {
    console.log ("Gaji anda Rp. 300.000,")
}else {
    console.log ("Anda tidak mendapat gaji")
}

// No 6

let tinggiAir = 800.0

if (tinggiAir <= 500.0 ) {
    console.log("Status AMAN")
}else if (tinggiAir <= 600.0)  {
    console.log("Status WASPADA")
}else if (tinggiAir <= 650.0 ) {
    console.log("Status SIAGA2")
}else {
    console.log("Status SIAGA1")
}