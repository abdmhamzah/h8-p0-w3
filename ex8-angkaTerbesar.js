//  NAMA: Hamzah Abdullah Mubarak

function pasanganTerbesar(num) {
    
    var max = 0
    var double = []
    var toString = String(num)
    // console.log(toString);
    // console.log(typeof(toString))

    for (var i = 0; i < toString.length -1; i++) {
        double.push(toString[i] + toString[i+1])
    }

    for (var j = 0; j < double.length; j++) {
        // console.log(double[j]);
        if (double[j] > max){
            max = double[j]
        }
    }
    // console.log(double);
    return max
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99