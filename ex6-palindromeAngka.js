//  NAMA: Hamzah Abdullah Mubarak

function angkaPalindrome(num) {
    
    var kata
    var tmp
    num++
    while (true) {
        kata = String(num)
        temp = ''
        for (var i = kata.length - 1; i >= 0; i--) {
            temp += kata[i]
        }
        if (temp === kata){
            return num
        }
        else {
            num ++
        }
    }
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001