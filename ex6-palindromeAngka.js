//  NAMA: Hamzah Abdullah Mubarak

function angkaPalindrome(num) {
    var hasil = num

    if (num < 10){
        return num + 1
    }
    else {
        var toStr = ''+num
        console.log(toStr);
        
        for (var i = 0; i < toStr.length; i++) {
            console.log(num[i]);
        }
    
        if (String(hasil) !== String(num)){
        
        }

    }
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001