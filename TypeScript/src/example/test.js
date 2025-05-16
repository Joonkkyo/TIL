const obj = {
    a: 1,
    b: false,
    c: async function () {},
    d: async () => {},
    async e() {}
}

const obj2 = {
    a: 1,
    b: 2
}

const { a: num } =  obj2 // 객체 구조 분해 할당
console.log(num) // 1