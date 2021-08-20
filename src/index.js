let person = [
  { name: "chand", age: 29 },
  { name: "chand", age: 29 },
  { name: "basha", age: 29 },
  { name: "sayyed", age: 29 }
];

function remove(person) {
  let obj = {};
  for (let i = 0; i < person.length; ++i) {
    if (obj[person[i].name] === person[i]) {
    }
  }
  console.log(obj);
}

console.log("removing", remove(person));

///
let result = {};

for (let i = 0; i < person.length; ++i) result[person[i].name] = person[i];

result = Object.values(result);
console.log(result);

///
let obj = {};
let unique = person.filter((p) => !obj[p.name] && (obj[p.name] = true));
console.log("", unique);
