// without return

/* function dataHandling(arr) {
    for (var i = 0; i < arr.length; i++) {
        var ttl = '';
        for (var j = 0; j < 5; j++) {
            var str = '';
            switch (j) {
                case 0: 
                    str = 'Nomor ID: ' + arr[i][j];
                    console.log(str);
                    break;
                case 1:
                    str = 'Nama Lengkap: ' + arr[i][j];
                    console.log(str);
                    break;
                case 2:
                    ttl = 'TTL: ' + arr[i][j];
                    break;
                case 3:
                    str = ttl + ' ' + arr[i][j];
                    console.log(str);
                    break;
                case 4:
                    str = 'Hobi: ' + arr[i][j];
                    console.log(str);
                    break
            }
        }
        console.log();
    }
}
*/

// with return
function dataHandling(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        var ttl = '';
        for (var j = 0; j < 5; j++) {
            switch (j) {
                case 0: 
                    str += 'Nomor ID: ' + arr[i][j] + '\n';
                    break;
                case 1:
                    str += 'Nama Lengkap: ' + arr[i][j] + '\n';
                    break;
                case 2:
                    ttl = 'TTL: ' + arr[i][j];
                    break;
                case 3:
                    str += ttl + ' ' + arr[i][j] + '\n';
                    break;
                case 4:
                    str += 'Hobi: ' + arr[i][j] + '\n\n';
                    break;
            }
        }
    }
    return str;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));