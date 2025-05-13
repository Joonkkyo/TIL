const user = {
    name: 'John',
    age: 20
}

function hello(user) {
    const { name } = user // 객체 구조 분해 할당
    console.log(name) // John
    console.log(user.name); // John
}

hello(user);

const users = ['Neo', 'Evan', 'Lewis']
function getUser(user) {
    const [neo, evan, lewis] = users
    console.log(neo, evan, lewis)
    console.log(users[0], users[1], users[2])
}