//  NAMA: Hamzah Abdullah Mubarak

function tentukanDeretGeometri(arr) {

    var beda = 0
    var dataBeda = []

    for (let i = 0; i < arr.length -1; i++) {
        beda = arr[i+1] / arr[i]
        dataBeda.push(beda)
    }
    console.log(dataBeda);

    for (let j = 0; j < dataBeda.length; j++) {
        if (dataBeda[j] !== dataBeda[1]){
            return false
        }
        return true
    }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false