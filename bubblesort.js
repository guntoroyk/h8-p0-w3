function bubbleSort(arr) {
    let swapped = false;
    let loopingKe = 0;
    while (swapped === false) {
        console.log('looping ke =', loopingKe);
        swapped = true;
        for (let i = 0; i < arr.length; i++) {
            console.log(i)
            console.log(arr[i] + ' > ' + arr[i+1])
            console.log(arr[i] > arr[i+1])
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = false;
            }
            console.log('swapped =', swapped);
            console.log(arr);
        }
        loopingKe++;
        // console.log(swapped);
    }
    return arr;
}

var a = ['cacing', 'kuda', 'ayam'];

console.log(bubbleSort(a));
/*
    i = 0
    cacing, kuda, ayam
    swapped = true

    i = 1
    cacing, ayam, kuda // swap
    swapped = false

    i = 2
    cacing, ayam, kuda 
    swapped = false


    i = 0
    ayam, cacing, kuda // swap
    swapped = false


    i = 1
    ayam, cacing, kuda
    swapped = false

    

*/





// let swapped = false;
//     while (swapped === false) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//         swapped = true;
//     }