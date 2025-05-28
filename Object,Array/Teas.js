// 1-Create an array containing different types of teas?
  const teas = ["Green Tea","Oolong Tea","Lemon Tea","Ginger Tea","Mashala Tea","Herbal Tea"];

// 2-Add "Chamomile Tea" to the existing list of Teas?
const AddTea = teas.push("Chamomile Tea");
console.log(AddTea);
console.log(teas);

// 3-Remove "Oolong Tea" form the list of teas?
const RemoveTea = teas.splice(1,1);
console.log(RemoveTea);
console.log(teas);

// 4-Filter the list to only include teas that are Caffeinated?
const CaffeinatedTea = teas.filter((Tea) => Tea !== "Herbal Tea");
console.log(CaffeinatedTea);

// 5-Sort the list of teas in alphabetical Order?
const sortTea = teas.sort();
console.log(sortTea);

// 6-Use a for loop to print each type of tea in the array?
for(let i = 0; i < teas.length; i++){
     console.log(teas[i]);
}

// 7-Use a for loop to count how many teas are Caffeinated(excluding "Herbal Tea")?
let CaffeinatedTeas = 0;
for(let i = 0; i < teas.length; i++){
    if(teas[i] !== "Herbal Tea"){
        CaffeinatedTeas++;
    }
}
console.log(CaffeinatedTeas);

// 8-Use a for loop to create a new array with all tea names in upperCase?
let array = [];
for(let i = 0; i < teas.length; i++){
    array.push(teas[i].toUpperCase());
}
console.log(array);

// 9-Use a for loop to find the tea name with the most Characters?
let longestTea = "";
for(let i = 0;i < teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea);

// 10-Use a for loop to reverse the order of teas in the array?
const reversedArray = [];
for(let i = teas.length - 1; i >= 0; i--){
    reversedArray.push(teas[i]);
}
console.log(reversedArray);