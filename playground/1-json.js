const fs = require('fs');

// // wite to file system

// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson)

// //read to file system

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson);

// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson);

data.age=37;
data.name="Nishant";

const dataJson1 = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJson1)

