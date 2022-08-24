
interface User {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: User[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]


//     1. Создать строку из имен пользователей через запятую

const fullname = users.map(({ name }) => `${name}`).join(', ')
console.log(fullname);

//     2. Посчитать общее количнство машин у пользователей

const Cars = users.reduce((acc, user) => {
    if (user.cars !== undefined) {
        acc += user.cars.length;
    }
    return acc;
}, 0);
console.log(Cars);

//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

const UsershasEducation = users.filter((el) => {
    return (el.hasEducation === true)
}).map(({ name }) => name)

console.log(UsershasEducation)

//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const sorteAnimals = users.filter((el) => {
    return el.animals
}).map(({ name }) => name)

console.log(sorteAnimals)

//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const sortedUsers = users.filter((el) => {
    return (el.cars !== undefined)}).map(({ cars }) => cars).join(', ')

console.log(sortedUsers)