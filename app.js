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
