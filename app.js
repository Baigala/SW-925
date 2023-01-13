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

// 1.11 loop, backtick, x += 5;, x++, \n
// for loop
// baktick - ``
// for(ehleliinTseg;Nohtsol;Tooluur){
// ajillah ystoi code.
// }
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// for (var i = 1; i <= 5; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i}   tegsh too bna.`);
//   } else {
//     console.log(i + " sondgoi too bna.");
//   }
// }
// while
// var i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// do while
// do {
//   console.log(i);
//   i++;
// } while (i <= -1);

// Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үржвэрийг хэвлэх, 1000-с бага бол нийлбэрийг хэвлэ.
// var too1 = +prompt("ehnii too");
// var too2 = +prompt("daraah too");
// if (too1 * too2 > 1000) {
//   console.log(too1 * too2);
// } else if (too1 * too2 < 1000) {
//   console.log(too1 + too2);
// }
// 10 хүртэл давталт хийж, тоо тус бүрийг бүх өмнөх тооны нийлбэртэй консолд хэвлэнэ үү.
// var niilber = 0;
// for (var i = 1; i <= 10; i++) {
//   niilber += i;
//   console.log(`${i} hurtelh niilber:    ${niilber}`);
//   //   console.log(i + " hurtelh niilber:     " + niilber);
// }
// var x = 4;
// x++; // i = i + 1;
// x--; // i = i - 1;
// x = x + 5;
// x += 5;
// x *= 2;
// x + 5;
// x -= 10;

// console.log("aaa\nbbb");
// alert("aaa\n1111121");
// *****
// var str = "";
// for (var i = 1; i <= 5; i++) {
//   str += "*";
// }
// console.log(str);

// 01.13 function
// parameter, argument
// function-ii 2 torol(void, return hdg)
// Function - oo zarlaj bna.
// void function
// function printInfo(ner, age) {
//   console.log("This person's name is: " + ner + " ,ene hunii nas: " + age);
// }
// Function - oo ajilluulah.
// printInfo("Sid", 23);
// printInfo("Alice", 25);
// printInfo("Henry", 40);

// void(uildel hdg) nemeh function:
// function nemeh1(too1, too2) {
//   var niilber = too1 + too2;
//   console.log(niilber);
// }
// nemeh1(9, 7);

// return hdg nemeh function:
// function nemeh(too1, too2) {
//   var niilber = too1 + too2;
//   return too1;
// }
// console.log(4);
// console.log(nemeh(1, 3));
// var x = nemeh(5, 8) * 2;
// console.log(x);

// var ner = "Grisha";
// var mergejil = "togooch";

// if (mergejil === "marketing manager") {
//   console.log(ner + " poster hdg.");
// } else if (mergejil === "togooch") {
//   console.log(ner + " hool hdg.");
// } else if (mergejil === "bagsh") {
//   console.log(ner + " hicheel zaadag.");
// } else {
//   console.log("iim mergejil medehgui.");
// }

// var ner1 = "Gizmo";
// var mergejil1 = "marketing manager";

// if (mergejil1 === "marketing manager") {
//   console.log(ner1 + " poster hdg.");
// } else if (mergejil1 === "togooch") {
//   console.log(ner1 + " hool hdg.");
// } else if (mergejil1 === "bagsh") {
//   console.log(ner1 + " hicheel zaadag.");
// } else {
//   console.log("iim mergejil medehgui.");
// }

function mergejilTodorhoiloh(ner, mergejil) {
  if (mergejil === "marketing manager") {
    console.log(ner + " poster hdg.");
  } else if (mergejil === "togooch") {
    console.log(ner + " hool hdg.");
  } else if (mergejil === "bagsh") {
    console.log(ner + " hicheel zaadag.");
  } else {
    console.log("iim mergejil medehgui.");
  }
}
// x = "bagsh";
// mergejilTodorhoiloh("Dulmaa", x);
// mergejilTodorhoiloh("Bold", "marketing manager");
// mergejilTodorhoiloh("Bold", "marketing manager");
// mergejilTodorhoiloh("Bold", "marketing manager");
// mergejilTodorhoiloh("Bold", "marketing manager");
// mergejilTodorhoiloh("Bold", "marketing manager");

// Function && return ashiglaj bodoh:
/* Дасгал:
2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаа */

/* Дасгал:
 Тоо өгөгдсөн бол тухайн тоо хүртэлх нийлбэрүүүдийг олж буцаа. */

/* Дасгал:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг олж буцаа.
томьёо: (суурь * өндөр) / 2 */
