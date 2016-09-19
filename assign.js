// Object.assign

let obj1 = {name: 'Joe', age: 33}
let obj2 = {company: 'Harris', supervisor: 'JBro'}
let obj3 = {division: 'Specialty Applications'}

obj = Object.assign(obj1, obj2, obj3);

console.log(obj);

// defaults, options