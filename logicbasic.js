// NO 1
function evenChar(string){
    if (typeof string !== 'string') return 'Error, Input harus string';
    let text= ""
    for (let i= 0; i < string.length; i++){
        if( i % 2 === 1){
            text += string[i]
    }
}
return text; 
} 
console.log(evenChar('pratama'))


// /// NO 2
function WordCount(string){
    if (typeof string !== 'string') return 'Error, Input harus string';
    let text= 0;
    for (let i = 0; i <string.length; i++){
        if (string[i] === " "){
            text += 1;
    }
}
let jumlahkata= text +1;
return jumlahkata;
}
console.log(WordCount('pratama'))


// NO 3
function VowelCount(string){
    if (typeof string !== 'string') return 'Error, Input harus string';
    let vokal = ['a','i','u','e','o']
    let Vvokal = 0;
    let konsonan = 0;
    function cekvokal(huruf){
    for (let i=0; i < vokal.length; i++){
        if (huruf === vokal[i]){
            return true;
        }
    }
    return false;
}
for (let i=0; i < string.length; i++){
    if(cekvokal(string[i])){
        Vvokal += 1;
    } else { 
        konsonan +=1;
    }
}
return `Jumlah vokal : ${Vvokal} + Jumlah Konsonan : ${konsonan}` ;
}
console.log(VowelCount('pratama'))


// NO 4
function ReverseWord(string){
    if (typeof string !== 'string') return 'Error, Input harus string';
    let text = "";
    for (let i=string.length - 1; i >= 0; i--){
    text += string[i];
}
return text;
}
console.log(ReverseWord('Hello'));


//NO 5
function palindrom(string){
    if (ReverseWord(string) === string){
        return true;
    }else {
        return false;
    }
}
console.log(palindrom('katak'));


// NO 6
function ExchangeCoin (money){
    let bank = [1000,500,200,100,50,20,10,5,1];
    let results = "";
    function check(fraction){
        while (money >= fraction){
            results += fraction+",";
            money -= fraction;
    }
}
for (i=0; i < bank.length; i++){
    check(bank[i]);
}
return results;
}
console.log(ExchangeCoin(1752))

// NO 7
let row = 2

for(let i = 0; i < row; i++) {
    let temp = "";
    for(let j = row - i; j <= row; j++) {
        temp += "*"
    }
    console.log(temp)
}

// NO 8
var rows = 5;
var output= "";
for (var i = 0; i < rows; i++) {
var temp = "";   
for(let j = 0; j <(rows - i - 1); j++) {
    temp += " ";
}
    for (var k = 1; k <= 2 * i + 1; k++) {
        output += "*";

    }
    console.log(temp + output);
    output = "";
}

