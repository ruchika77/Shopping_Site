const stringArray = ['shiva', 'ruchika', 'swetha', 'aditya', 'saarthi'];
const objectArray = [{ name: 'shiva' }, { name: 'ruchika' }, { name: 'swetha' }, { name: 'aditya' }, { name: 'saarthi' }]
const jsonObject = {
  name: 'shiva',
  age: 30,
  dob: '09-09-1988',
  pob: 'Kakinada'
}

// 1. Write a for loop to print list of items in stringArray
// for (let i = 0; i < stringArray.length; i++) {
//   console.log("Name : ", stringArray[i])
// };

stringArray.forEach(function (element) {
  console.log("Name : ", element);
})
console.log("**************************")


// 2. write a for loop to print list of names from objectArray
objectArray.forEach(function (element) {
  console.log("Name>> Object :", element.name)
})
console.log("**************************")

// 3. write a for loop to prnt key & values from jsonObject
for (let key in jsonObject) {
  console.log(key + '-' + jsonObject[key])
}
console.log("**************************")
