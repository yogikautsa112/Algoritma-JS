let VIP = prompt("Masukan tiket yang terjual:")
let eksekutif = prompt("Masukan tiket yang terjual:")
let ekonomi = prompt("Masukan tiket yang terjual:")

if (VIP >= 20 && VIP < 35 ) {
    untungVip = 15
}else if (VIP >= 35) {
    untungVip = 25
}else {
    untungVip = 5
}

if (eksekutif >= 20 && eksekutif < 40) {
    untungEKS = 10
}else if (eksekutif >= 40) {
    untungEKS = 20
}else {
    untungEKS = 2
}

if (ekonomi >= 1) {
    untungEKO = 7
}

let totalTiket = parseInt(VIP) + parseInt(eksekutif) + parseInt(ekonomi)
let keuntunganVip = parseInt(VIP) * untungVip
let keuntunganEKS = parseInt(eksekutif) * untungEKS
let keuntunganEKO = parseInt(ekonomi) * untungEKO
let totalUntung = keuntunganEKO + keuntunganEKS + keuntunganVip

// console.log(`Keuntungan VIP = ${keuntunganVip}% 
// Keuntungan Eksekutif = ${keuntunganEKS}%
// Keuntungan Ekonomi = ${keuntunganEKO}%
// Keuntungan Total = ${totalUntung}%
// Jumlah tiket VIP = ${VIP} 
// Jumlah tiket Eksekutif = ${eksekutif}
// Jumlah tiket Ekonomi = ${ekonomi}
// Total tiket dari seluruh kelas = ${totalTiket}`)

document.write(`Keuntungan VIP = ${keuntunganVip}%
Keuntungan Eksekutif = ${keuntunganEKS}%
Keuntungan Ekonomi = ${keuntunganEKO}%
Keuntungan Total = ${totalUntung}%
Jumlah tiket VIP = ${VIP} 
Jumlah tiket Eksekutif = ${eksekutif}
Jumlah tiket Ekonomi = ${ekonomi}
Total tiket dari seluruh kelas = ${totalTiket}`)