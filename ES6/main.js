import { tinhTong, tinhHieu } from "./test.js";
import SinhVien from "./SinhVien.js"

console.log("tong la", tinhTong());
console.log("Hieu la", tinhHieu());

const sinhVien10 = new SinhVien("minh")
console.log("Ten la", sinhVien10.name);

let b = 15;
b = 20;
console.log(b);

const PI = 3.14;

function foo() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x) // 20
}

function foo2() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
foo();
foo2();

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i);

function test() {

}

function test2() {
    return 10;

}
test2();

/**
 * arrow function
 * khai bao function rồi mới gọi
 * khi có 1 tham số thì có thể bỏ dấu ()
 * 
 */
let test1 = (name, age) => {
    console.log(name, age);
};

test1("abc", 27);

// const test3 = () => {
//     return 10;
// }
// cach viet 2 : => : đại điện cho dấu return
const test3 = () => 10;
test3();

// ES5
let hocVien = {
    hoTen: "nguyen van a",
    lop: "frontEnd xxx",
    layThongTinHocVien: function() {
        // console.log(this);

        function hienThiThongTin() {

            console.log(`ho ten: ${this.hoTen} - lop: ${this.lop}`);
        }
        const unbound = hienThiThongTin;
        const bindHienthi = unbound.bind(hocVien);
        bindHienthi();
    }
}

hocVien.layThongTinHocVien();

// ES6
let hocVien1 = {
    hoTen: "nguyen van b",
    lop: "frontEnd xxx",
    layThongTinHocVien: function() {
        const hienThiThongTin = () => {
            console.log(`ho ten: ${this.hoTen} - lop: ${this.lop}`);
        }
        hienThiThongTin();
    }
}

hocVien1.layThongTinHocVien();

/**
 * rest params
 */

// const sum = (a, b, c, d, e) => {
//     const total = a + b + c + d + e;
//     console.log("total", total);
// };

// cach 2
const sum = (...numbers) => {
    // const total = a + b + c + d + e;
    // let total = 0;
    // numbers.map((item) => {
    //     total += item;
    // });

    let total = numbers.reduce((a, b) => {
        return a + b;
    }, 0)
    console.log("total", total);
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 100);


/**
 * Spread Operator (*)
 */

// let mangA = [1, 2, 3]; // 1 2 3
// let mangB = mangA; // 1 2 3 mangA bi thay doi theo cho tham chieu bo nho( mang va object)

// mangB.push(4);
// mangB.push(5); // mangB : 1,2,3,4,5
// console.log(mangA); // mangA =
// console.log(mangB);

let mangA = [1, 2, 3];
//let mangB = [...mangA]; // *****


// mangB.push(4);
// mangB.push(5); // mangB : 1,2,3,4,5
// cach 2
let mangB = [...mangA, 4, 5]; // *****

console.log(mangA); // mangA =
console.log(mangB);

let people = {
    name: "nguyen van",
    age: 27,

};
const people2 = {...people };

people2.lop = "FE56";

console.log(people);
console.log(people2);

// shallow & Deep lien quan den copy

/**
 * Default Params (*) tham so mac dinh
 */

const getInfo = (name, age = 18) => {
    console.log(`ten: ${name} - tuoi: ${age}`)
};

getInfo("abc");

/**
 * Destructuring : boc va tach
 */

let array = [1, 2];
const [x, y] = array;
console.log(x, y);

const sinhVien = {
    ten: "Linh",
    tuoi: 18,
};

const { ten, tuoi } = sinhVien;
console.log(ten, tuoi);

/**
 * Template Strings
 */

const username = "trinh";
const result = `Hello ${username}`;

/**
 * Object literals
 */

let hoTen = "trang";
let lop = "FE56";

const sinhVien1 = {
    // key : value
    hoTen, // hoTen: hoTen
    lop,
}
console.log(sinhVien1);

/**
 * for of: lấy phần tử
 *  - for in lấy chỉ mục
 */
var list = ["Nguyen", "An", "Tu", "Viet"];

for (let item of list) {
    console.log(item);
}

for (let i in list) {
    console.log(i);
}