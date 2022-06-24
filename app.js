//Data 1
// let dolphins = [96, 108, 89];
// let koalas = [88, 91, 110];

//Data 2
// let dolphins = [97, 112, 101];
// let koalas = [109, 95, 123];

//Data 3
let dolphins = [97, 112, 101];
let koalas = [109, 95, 106];

//Calculate the average score :
let dolphinsAverage = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
let koalasAverage = (koalas[0] + koalas[1] + koalas[2]) / 3;

console.log(`Dolphins Average : ${dolphinsAverage}`);
console.log(`Koalas Average : ${koalasAverage}`);

//Compare averages :
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100)
  console.log("Dolphins are the winners !");
else if (koalasAverage > dolphinsAverage && koalasAverage >= 100)
  console.log("Koalas are the winners !");
else if (koalasAverage === dolphinsAverage && koalasAverage >= 100)
  console.log("It's a draw !");
else console.log("There is no winner !");
