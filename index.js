const umur = (tanya_umur, tanya_nama) => console.log(`umur ${tanya_nama} :` + tanya_umur);
const yadi = umur(23, 'yadi');
const adi  = umur(33, 'Adi');

class manusia {
 gender = 'wanita';

 cetakgender = () => {
  console.log("Jenis Kelamin : " + this.gender);
 }


}
class Orang extends manusia {
 gender = 'pria';
 nama = 'yadi';
 cetak_nama = () => {
  console.log(`nama : ${this.nama}`);
 }
}
const orang = new Orang();
orang.cetakgender();
orang.cetak_nama();

//rest dan spread
const saya = {
 'nama': "yadi"
};
const i_am = {
 ...saya,
 'umur': 32
};
console.log(i_am);
/*
fungsi args adalah untuk parameter yang akan diubah menjadi array
*/
//filter

const filter = (...args) => {
 return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3, 4));

function myFun(a, b, ...manyMoreArgs) {
 console.log("a", a);
 console.log("b", b);
 console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas);

let numbers = [9, 4, 7, 1];

console.log(Math.min(...numbers)); // 1

var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

arr2.push('d');

console.log(arr2);

const perzon = {
 name: 'Yadi'
};
const perzon2 = {
 ...perzon
};
perzon.name = 'ganti';
console.log(perzon2);

//belajar map untuk looping
const nomor = [1, 2, 3];
const kalidua = nomor.map((satuan) => {
 return satuan * 2;
})
console.log(nomor);
console.log(kalidua);

// Traditional Anonymous Function
function x(a) {
 return a + 100;
};

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
 return a + 100;
};

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;


// Traditional Anonymous Function
function xx(a, b) {
 return a + b + 100;
};

// Arrow Function
(a, b) => a + b + 100;

// Traditional Anonymous Function (no arguments)
let aa = 4;
let bbb = 2;

function xxx() {
 return aa + bbb + 100;
};

// Arrow Function (no arguments)
let aaaa = 4;
let bbbb = 2;
() => aaaa + bbbb + 100;

// Traditional Function
function bob1(a) {
 return a + 100;
};

// Arrow Function
let bob = a => a + 100;
console.log(bob(2));

/*
*******************************************************
                          ARROW
******************************************************
*/
//Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}
//which you could also write as:

const callMe4 = function(name) { 
    console.log(name);
}
//becomes: 

const callMe3 = (name) => { 
    console.log(name);
}
//Important: 

//When having no arguments, you have to use empty parentheses in the function declaration:

const callMe5 = () => { 
    console.log('Max!');
}
//When having exactly one argument, you may omit the parentheses:

const callMe2 = name => { 
    console.log(name);
}
//When just returning a value, you can use the following shortcut:

const returnMe = name => name
//That's equal to:

const returnMe2 = name => { 
    return name;
}
/*
*********** MENCARI ARRAY *********
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 100);

console.log(found);
// expected output: 12

const inventory = [
 {name: 'apples', quantity: 2},
 {name: 'bananas', quantity: 0},
 {name: 'cherries', quantity: 5}
];

const result = inventory.find( ({ name }) => name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }