let names = [
  { name: "amin" },
  { name: "ali" },
  { name: "akbar" },
  { name: "ahmad" },
  { name: "mostafa" },
];

let list = names => {
// my first solution    
//     names.forEach(person => {
//         person = person.name;
//         names.push(person);
//     });
    // let namesLength = names.length / 2;
    // names.splice(0, namesLength);
  
//my second solution   
let list = names.map((person) => person.name);

  let namesString = list.join(',');
  let replacement = '&';
  let resualt = namesString.replace(/,([^,]*)$/, replacement + "$1");
  console.log(resualt);
}

list(names);

