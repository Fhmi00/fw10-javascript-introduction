function valueSelection(firstValue, lastValue, valueArray) {

    let newArray = [];

    let countArray = valueArray.length;

    if (firstValue > lastValue) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (countArray < 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else if (firstValue < lastValue && countArray >= 5) {
        for (let i = 0; i < countArray; i++) {
            newArray.sort((a, b) => a - b);
            if (valueArray[i] > firstValue && valueArray[i] < lastValue) {
                newArray.push(valueArray[i]);
            }
        }
        if (newArray.length == 0) {
            return console.log("Nilai tidak ditemukan!");
        }
        return console.log(newArray);
    }

}
valueSelection(2, 20, [14, 17, 30, 8])

// function sortingNumber(firstNumber, lastNumber, dataArray) {
//     let tempArray = dataArray
//     tempArray.sort((a, b) => a - b)
//     if (firstNumber < lastNumber && dataArray.length > 5) {
//         function reqNilai(tempNumber) {
//             if (tempNumber > firstNumber && tempNumber < lastNumber) {
//                 return tempNumber;
//             }
//         }
//         return tempArray.filter(reqNilai)
//     } else if (dataArray.length < 5) {
//         return "dataArray harus lebih dari 5"
//     } else if (lastNumber < firstNumber) {
//         return "nilai akhir harus lebih dari nilai awal"
//     } else {
//         return "nilai tidak ditemukan"
//     }
// }

// benar 1
// console.log(sortingNumber(2, 40, [2, 5, 39, 74, 1, 9, 20]))

// benar 2
// console.log(sortingNumber(10, 100, [30, 5, 4, 1, 20, 14, 67]))

// salah jumlah dataArray
// console.log(sortingNumber(2, 30, [74, 1, 9, 20]))

// salah nilai awal lebih dari nilai akhir
// console.log(sortingNumber(100, 1, [30, 5, 4, 1, 20, 14, 67]))

// salah nilai tidak ditemukan
// console.log(sortingNumber(5, 10, [11, 12, 13, 14, 15, 16]));