/*
var js = {
    autore: "Fromm",
    titolo: "L'arte di amare",
    data: "21/12/2018"
}

console.log(Object.values(js));
console.log(Object.keys(js));
var str = Object.keys(js).join(',');
console.log(str);
*/
let date = new Date("07/01/2017");
console.log(date.getFullYear());
console.log(date.getDate(),date.getDay(),date.getMonth());
let newdate = new Date();
console.log(newdate,newdate.getDate(),newdate.getDay(),newdate.getMonth());