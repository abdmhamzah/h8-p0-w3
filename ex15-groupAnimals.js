//  NAMA: Hamzah Abdullah Mubarak

function groupAnimals(animals) {

    // sort animal sesuai abjad
    // animals.sort()
    for (let k = 0; k < animals.length; k++) {
        console.log(animals[k][0]);
        for (let l = 0; l < animals.length; l++) {
            if (animals[l] > animals[l+1]){
                var temp = animals[l]
                animals[l] = animals[l+1]
                animals[l+1] = temp
            }
        }
    }
    console.log(animals);
    
    
    var hasil = []
    for (var i = 0; i < animals.length; i++) {
        var cek = false
        for (var j = 0; j < hasil.length; j++) {
            if(hasil[j][0][0] === animals[i][0]){
                hasil[j].push(animals[i])
                animals[i] = ''
            }
        }
        
        if (cek === false && animals[i] !== ''){
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