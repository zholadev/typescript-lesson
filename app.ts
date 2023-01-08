let revenue: number = 1000;
let bonus: number = 100;
let c: boolean = false;
let d: boolean = true;
let stroke: string = 'zholadev'
let strike2: string = 'coder'

let res: number = revenue + bonus
console.log(res)

// type data in function ts
function getFullName(firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
}

const getFullNameArrow = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
}

const getSumm = (a: number, b: number): number => {
    return a + b
}

console.log(getFullName('zholaman', 'zhumanov'))
console.log(getSumm(1242, 4354))
getFullNameArrow('zholaman', 'zhumanov')

// Object in ts

const getUserEntity = (userEntity: { firstname: string, lastname: string }): string => {
    return `${userEntity.firstname} ${userEntity.lastname}`
}

const user = {
    firstname: 'Zholaman',
    lastname: 'Zhumanov',
    city: 'Pavlodar',
    age: 24,
    skills: {
        dev: true,
        react: true
    }
}

let info: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        city: {
            address: string
        }
    }
} = {
    'officeId': 1,
    'isOpened': true,
    'contacts': {
        'phone': '3432432',
        'email': 'adsasdas',
        'city': {
            'address': 'asdasdas'
        }

    }
}

console.log(info)
console.log(getUserEntity(user))

// Arrays in ts
const skills: string[] = ['dev', 'devops', 'react']

for (const skill of skills) {
    console.log(skill.toUpperCase())
}

const skillsRes = skills
    .filter(s => s !== 'react')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)


console.log(skillsRes)

// tuples

const arr1: [number, string] = [1, 'asdsa'];
// const id = arr1[0]
// const skillName = arr1[1]

const [id, skillName] = arr1

const arr: [number, string, ...boolean[]] = [123121, 'react', true, false, true]

console.log(arr)
