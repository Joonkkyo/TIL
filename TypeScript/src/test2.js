interface Obj {
    abc: () => number
}

interface Obj2 {
    abc: () => Promise<number>
}

const obj: Obj = {
    abc: () => {
        return 123
    }
}

const obj2: Obj = {
    abc: async() => {
        return 123
    }
}

console.log(obj.abc()) // 123
console.log(obj2.abc()) // promise instance