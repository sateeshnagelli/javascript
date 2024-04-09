let marks = [90,85,73,67,89,];
console.log(marks);
marks[2] = 89;
  
let student = ["satti","sagar","sai"];
console.log(student);
console.log(student[0]);


 
let heros = ["satti","sagar","sai","akul","ajay","rithwik"]; //for loop
 
for( let idx=0; idx < heros.length; idx++){
    console.log(heros[idx]);

}

let cities = ["delhi", "hyd","chennai","benguluru","goa", "andra" ];//for of loop
for (let city of cities) {
    //console.log(city);
    console.log(city.toUpperCase());
}
//pratice find avg 

let marks1 = [90,85,73,67,89,];
let sum =0;
for (let val of marks1){
    sum += val;
}
let avg = sum /marks1.length;
console.log(`avg marks of class = ${avg}`);

//push method in array

let foodItems = ["potato","tomato","apple", "banana", "alu"];
foodItems.push("chips");
console.log(foodItems);

//pop
foodItems.pop();
console.log(foodItems);

//concat
let fcHeros = cities.concat(foodItems);
console.log(fcHeros);






