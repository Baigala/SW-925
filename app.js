/* JS үзэх хичээлүүд
variable, datatype, coersion, alert function, prompt function, git
condition
loop
function
array
object
es6
DOM
OOP
Async
*/

// 1.06
// variable ==>
// var tulhuur ug ashiglaj zarlana.
// var nas = 12;
// nas = 14; ==>overring
// huwisagchiin ner toogoor ehelsen baij bolohgui.
// Olon ugnees togtoh nertei huwisagchiig CamelCase ashiglan bichne.

// js datatype
// 1. number
// 2. string
// 3. boolean(true, false)
// undefined
// null

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence */

/*Дасгал 1
Өөрийн төрсөн оноо хувьсагчинд хадгалаад одоо байгаа оноос хасч насаа гаргаж ирдэг програм бич.
*/
// var torsonOn = +prompt("Ta torson onoo oruulna uu?");
// var currentYear = 2023;
// var nas = currentYear - torsonOn;
// alert("Tanii nas: " + nas);

/*Дасгал 2
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь ол..
urt = PiToo * 2 * r;
talbai = PiToo * r * r;
*/

// 1.09 condition, algorithm
// if statement
// %, &&, || - or, ! - not
// { } - block, ugalzan haalt
// if (nohtsol) dotorh code true buyu biyelwel {} dotorh mor code ajillana. false buyu biyelku bh yum bol else - iin ariin {} haaltan dotorh mor code ajillana.
// if statement butets ==>
// if (nohtsol) {
//   // true
// } else {
//   // false
// }
// herwee 18-s doosh nasnii hun bol console-d huuhed gej hewlene. 18s deesh bol tom hun gej hewlene.
// var nas = +prompt("Nasaa oruulna uu?");
// if (nas <= 18) {
//   console.log("huuhed bna.");
// } else {
//   console.log("tom hun bna.");
// }

// 0-12 hurtelh nasnii huniig huuhed, 12-18 nastai huniig oswor nasnii huuhed, 18-c deesh bol tom hun.
// else if - herwee ugui bol
// if (nas < 0 && nas > 150) {
//   if (nas >= 0 && nas <= 12) {
//     console.log("huuhed.");
//   } else if (nas > 12 && nas <= 18)
//     console.log("oswor nasnii huuhed.");
//   } else {
//     console.log("tom hun.");
//   }
// } else {
//   console.log("buruu nas oruulsan bna.");
// }

// ternary operator ==>
// promptoos toon utga awaad, tuhain toog sorog, buhel, butarhai esehiig shalgadag programm bich.
// % - remainder operator

// var num;
// num = +prompt("Toog oruulna uu?");
// num < 0
//   ? console.log("hasah too.")
//   : num % 1 == 0
//   ? console.log("buhel too.")
//   : console.log("butarhai too bna.");

// nas >= 0 && nas <= 12
//   ? console.log("huuhed.")
//   : nas > 12 && nas <= 18
//   ? console.log("oswor nasnii huuhed.")
//   : console.log("tom hun.");

// switch case ===>
// var fruits;
// fruits = prompt("jimsnii ner oruulna uu?");
// switch (fruits) {
//   case "orange":
//     console.log("jurj bna.");
//     break;
//   case "banana":
//     console.log("gadil bna");
//     break;
//   case "grapes":
//     console.log("usan uzem bna.");
//     break;
//   default:
//     console.log("Iim jims medehgui ee.");
// }

// switch (true) {
//   case nas >= 0 && nas < 13:
//     console.log("child");
//     break;
//   case nas >= 12 && nas < 18:
//     console.log("osvor nas");
//     break;
//   default:
//     console.log("adult");
// }

// if (14 === 14 || 15 === 16) {
//   console.log("ok.");
// }
// if (14 === 14 && 15 === 15) {
//   console.log("ok.");
// }
