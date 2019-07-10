function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let genap = [];
    let ganjil = [];
    let kelipatanTiga = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            kelipatanTiga.push(arr[i]);
        } else if (arr[i] % 2 === 0) {
            genap.push(arr[i]);
        } else if (arr[i] % 2 !== 0) {
            ganjil.push(arr[i]);
        }
        
    }
    newArr = [genap, ganjil, kelipatanTiga];
    return newArr;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  console.log(mengelompokkanAngka([1, 2, 21, 20, 111]));