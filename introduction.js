console.log('Welcome!')
const arr = Array();
console.log(arr);

const eigthXvalues = Array(8).fill('-X-');
console.log(eigthXvalues);

const first = [1,2,3];
const second = [4,5,6];
const third = first.concat(second);
console.log(third);

const companies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]
const name = 'Sh';
if (companies.includes(name)) {
    console.log(name);
} else {
    console.log('No!');
}
companies.sort();
console.log(companies);
