// NO 1

let input = [1,2,3];
let count = 0

for (let i=0; i <= input.length; i++){
    count += i
}
console.log(count);

// NO 2
function reverseAll(angka){
    function reverseElement(nomor){
        let str = nomor.toString();
        let temp = "";
        for (let i = str.length - 1; i>= 0;i--){
            temp += str[i]
        }
        return Number(temp)
    }

    let reverseIndex = []
    for (let i = angka.length -1; i >= 0; i--){
        if (typeof angka[i] !== "number") return "Isi array harus number semua"
        reverseIndex.push(reverseElement(angka[i]))
    }
    return reverseIndex;
}
console.log(reverseAll([123,456,789]));

//NO 3

function uniqueArr(array){
    let hasil = []

    for(let i = 0; i < array.length; i++){
        if (typeof array[i] !== "number") return "Isi array harus number semua"

        let same = false
        for (let k = 0; k < hasil.length; k++){
            if(hasil[k] === array[i]){
                same = true;
                break
            }
        }
        if (same === false){
            hasil.push(array[i])
        }
    }
    return hasil
}
console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,"j",5,5]));
console.log(uniqueArr([1,2,3,4,5,6,7,1,3,4,5,5]));

//NO 4
function jajanBoba(uang) {
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]
    console.log("David memulai jajan dengan uang " + uang + " rupiah");
    for (let i=0; i < listBoba.length; i++){
        if(uang - listBoba[i][1] >= 0){
            console.log("Dengan uang " + uang + ", cukup untuk membeli " + listBoba[i][0]+ " dengan harga "+ listBoba[i][1]);
            uang -= listBoba[i][1]
            console.log("jadi sisa uang david sekarang "+ uang)
        } else {
            console.log("dengan uang " + uang + " tidak bisa membeli " + listBoba[i])
        }
    }
    console.log("David pulang kerumah dengan uang " + uang)
}
jajanBoba(500000)

