function pasanganTerbesar(num) {
    // you can only write your code here!
    var strNum = String(num);
    var arrStrNum = strNum.split('')
    var joinArrStrNum = arrStrNum.join();

    for (var i = 0; i < arrStrNum.length; i++) {
       var jml = 0;
       
    }

    return typeof joinArrStrNum;

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

//  algoritma
/* 
  1. ubah num ke string
  2. 
*/