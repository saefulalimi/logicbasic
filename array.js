// // // //membuat array
// // // // [] & newArray ()

// // // const students = []
// // // const students = new Array()

// // // console.log(Array.isArray(students))

// // const students1 = ["saeful", "ardy", "iqbal",[],{}]
// // // const students2 = ["saeful", "ardy", "iqbal",[],{}]

// // // console.log(students1 === students2)
// // // console.log(students1[4] === students2[4])

// // students1.push("gilang")
// // console.log(students1)

// // const remove = students1.pop()
// // console.log("data yang di hapus:", remove)
// // students1.pop()
// // console.log(students1)
// // students1.pop()
// // console.log(students1)

// const fruit = ["banana", "apple", "orange"];

// fruit.push("grape");
// fruit.push("manggo")
// for(let i=0; i<fruit.length; i++){
//     console.log(fruit[i]);
// }
// for(let i=0; i>fruit.length; i--){
//     console.log(fruit[i]);
// }
// function hurufGenap(kata) {
//     if(typeof kata !="string"){
//         console.log("input bukan string")
//     }else{
//         for (i=1; i<kata.length; i+=2){
//             console.log(kata[i]);
//         }
//     }
// }
// hurufGenap("pratama")

// function WordCount(str) { 
//     return str.split(" ").length;
// }

// console.log(WordCount("hello"));

//1
// let penjumlahan = [1,2,3];
// let total = 0;

// for(i=0; i<penjumlahan.length; i++){
//     total += penjumlahan[i];
// }
// console.log(total);


// //2
// let reversed =[4,5,6].reverse();
// console.log(reversed);

// //2
// let balikan=[1,2,3];

// for (i=0; i<balikan.length; i++){
//     for (i<balikan.length-1; i>0; i++)
// }
// console.log(balikan);

// Basic Logic no 1
// function hurufGenap(kata) {
//     if(typeof kata !="string"){
//         console.log("Error input bukan string")
//     }else{
//         for (i=1; i<kata.length; i+=2){
//             console.log(kata[i]);
//         }
//     }
// }
// hurufGenap("Pratama")

//basic logic no 2
function countWord(str) { 
    if(typeof kata !="string"){
        console.log("Error input bukan string")
    }else{
        for (i = 1; i <= str.length; i++){
            if (str.length(i) == " ")
            {
                count ++;
            }
        }
        return count + 1;
        }
    }
        console.log(countWords("I am a short sentence"));
