//  NAMA: Hamzah Abdullah Mubarak

function groupAnimals(animals) {

    // sort animal sesuai abjad
    // animals.sort()
    
    var hasil = []
    for (var i = 0; i < animals.length; i++) {
        var cek = false
        var index
        for (var j = 0; j < hasil.length; j++) {
            if(hasil[j][0] === animals[i][0]){
                hasil[j].push(animals[i])
                animals[i] = ''
            }
        }
        if (cek === false){
            hasil.push([animals[i]])
        }
    }
    

    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]