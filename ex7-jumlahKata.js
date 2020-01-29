//  NAMA: Hamzah Abdullah Mubarak

function hitungJumlahKata(kalimat) {

    var kata = ''
    var hasil = []

    for (let i = 0; i <= kalimat.length; i++) {

        if (kalimat[i] === ' ' || i == kalimat.length){
            hasil.push(kata)
            kata = ''
        }
        if (kalimat[i] !== ' '){
            kata += kalimat[i]        
        }
    }
    console.log(hasil);   

    return hasil.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5