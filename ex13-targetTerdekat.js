//  NAMA: Hamzah Abdullah Mubarak

function targetTerdekat(arr) {

    var o = []
    var x = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o'){
            o.push(i)
        }
        else if (arr[i] === 'x'){
            x.push(i)
        }
    }

    if (o.length === 0 || x.length === 0){
        return 0
    }

    var jarak = []
    for (var j = 0; j < x.length; j++) {
        jarak[j] = Math.abs(x[j] - o)
    }
    console.log(jarak);

    for (var k = 0; k < jarak.length; k++) {
        var kecil = 0
        if (jarak[i] < jarak[i+1]){
            kecil = jarak[i]
            jarak[i] = jarak[i+1]
            jarak[i+1] = kecil
        }
    }
    
    return jarak[0]
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2