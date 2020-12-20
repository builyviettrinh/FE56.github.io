// function Student(_name){
//     this.name = _name;
// }

// var student = new Student("Trinh");

class Student {
    // hàm khởi tạo constructor
    constructor(_name) {
        this.name = _name;
    }
}

const student = new Student("Trinh");
console.log(student.name);

class Mother {
    constructor(_name) {
        this.name = _name;
    }

    colorEyes() {
        console.log("red");
    }
}

// tôi kế thừa từ mẹ tôi
class Me extends Mother {
    colorSkin() {
        console.log("brown");
    }
}

const me = new Me("Me");

console.log(me.name);
console.log(me.colorEyes);
console.log(me.colorSkin);

class Person {
    constructor(_name) {
        this.name = _name;
    }

    getName() {
        return this.name;
    }
}

class Mokey extends Person {
    getName() {
        return "hello " + this.name;
    }
}

const mokey = new Mokey("khi");
console.log(mokey.getName());


class People {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfo() {
        console.log(`ten: ${this.name} - tuoi: ${this.age}`);
    }
}


class Monkey2 extends People {
    constructor(_name, _age, _eat) {
        super(_name, _age);
        this.eat = _eat;
    }
    getInfo() {
        console.log(`an: ${this.eat}`);
    }
}

const monkey2 = new Monkey2("khi", 1, "chuoi");
monkey2.getInfo();