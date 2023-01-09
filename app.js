"use strict";
let revenue = 1000;
let bonus = 100;
let c = false;
let d = true;
let stroke = 'zholadev';
let strike2 = 'coder';
let res = revenue + bonus;
console.log(res);
// type data in function ts
function getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
const getFullNameArrow = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
const getSumm = (a, b) => {
    return a + b;
};
console.log(getFullName('zholaman', 'zhumanov'));
console.log(getSumm(1242, 4354));
getFullNameArrow('zholaman', 'zhumanov');
// Object in ts
const getUserEntity = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.lastname}`;
};
const user = {
    firstname: 'Zholaman',
    lastname: 'Zhumanov',
    city: 'Pavlodar',
    age: 24,
    skills: {
        dev: true,
        react: true
    }
};
let info = {
    'officeId': 1,
    'isOpened': true,
    'contacts': {
        'phone': '3432432',
        'email': 'adsasdas',
        'city': {
            'address': 'asdasdas'
        }
    }
};
console.log(info);
console.log(getUserEntity(user));
// Arrays in ts
const skills = ['dev', 'devops', 'react'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const skillsRes = skills
    .filter(s => s !== 'react')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(skillsRes);
// tuples
const arr1 = [1, 'asdsa'];
// const id = arr1[0]
// const skillName = arr1[1]
const [id, skillName] = arr1;
const arr = [123121, 'react', true, false, true];
console.log(arr);
// Readonly in ts
const skillExample = [123, 'zholadev'];
const skillExample2 = ['123', 'zholadev'];
const skillExample3 = ['123', 'zholadev'];
const skillExample4 = ['123', 'zholadev'];
let a = 5;
a = 4;
