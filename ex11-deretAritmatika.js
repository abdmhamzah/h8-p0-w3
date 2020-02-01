//  NAMA: Hamzah Abdullah Mubarak

function tentukanDeretAritmatika(arr) {

    var beda = 0
    var dataBeda = []

    for (let i = 0; i < arr.length -1; i++) {
        beda = arr[i+1] - arr[i]
        dataBeda.push(beda)
    }
    console.log(dataBeda);

    for (let j = 0; j < dataBeda.length-1; j++) {
        if (dataBeda[j] === dataBeda[j+1]){
            continue
        }
        else {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false