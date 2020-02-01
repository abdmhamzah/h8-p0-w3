//  NAMA: Hamzah Abdullah Mubarak

function dataHandling2(data) {
    data.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    data.splice(4, 1, 'Pria', 'SMA Internasional Metro')

    var tanggal = data[3].split('/')
    var dataTanggal = tanggal.join('-')

    var bulan = ''
    switch (Number(tanggal[1])) {
        case 1: bulan = 'Januari'; break;
        case 2: bulan = 'Februari'; break;
        case 3: bulan = 'Maret'; break;
        case 4: bulan = 'April'; break;
        case 5: bulan = 'Mei'; break;
        case 6: bulan = 'Juni'; break;
        case 7: bulan = 'Juli'; break;
        case 8: bulan = 'Agustus'; break;
        case 9: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
        default: console.log('Bulan lahir keliru'); break;
    }
    
    var sort = tanggal.sort(function(a,b){return(b-a)})
    var limitNama = data[1].slice(0, 15)
    
    console.log(data)
    console.log(bulan)
    console.log(sort)
    console.log(dataTanggal)
    console.log(limitNama)
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);