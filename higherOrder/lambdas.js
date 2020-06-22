const sum = (a, b) => a + b;
const ans = sum(6, 8);

console.log(ans);

const div = (a, b) => b == 0? "divide by 0 error": a/b;

console.log(div(5, 3));
console.log(div(5, 0));

const Person = (name, age) => {
    const obj = new Object();

    obj.name = name;
    obj.age = age;

    return obj;
}

const ojas = Person("Ojas", 22);
console.log(ojas);