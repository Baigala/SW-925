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
//
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
томьёо: (суурь * өндөр) / 2 
*/

// Udemy;

/* 01.16 array - массив */
var arr = [1, true, "Sid", 234, "dd", "aa", 88];
// index 0 - oos ehelj dugaarlana.
// массивийн элементүүд рүү index-ээр нь хандаж авна.
var bool = arr[1];
// массивийн урт буюу хэдэн ширхэг элемэнт байгааг заана.
var len = arr.length;
// arr массивийн сүүлийн элемэнтийг барьж авах.
var lastElement = arr[arr.length - 1];

// Массивтай ажилладаг функцууд:
// push() - хамгийн сүүлд элемент нэмж өгнө.
// pop() - хамгийн сүүлийн элементийг устгах.
// shift() - хамгийн эхний элементийг устгах.
// unshift(44) - хамгийн эхэнд элемент нэмэх.
// slice(>=, <) - тодорхой хэсгийг тасдаж авна.
// splice(ehleliin index, ustgahToo) - тодорхой хэсгийг устгах.
// reverse() - өгөгдлүүдийн байрлалыг урвуу болгоно.
// split() - стринг өгөгдлийг салгаж массив болгоно;
// "asdfas".split("");
// join() - массивын элементүүдийг хооронд нь стринг болгон нийлүүлнэ.
// arr.join(" ")
// arr.concat(залгах массив); - 2 массивыг хооронд нь залгаад шинэ массив үүсгэнэ.

// Функц ашиглаж бодно.
/*Дасгал №1:
 Өгөгдсөн массив дотроос 5-д хуваагддаг тоонуудын нийлбэрийг олж буцаа */
function bodlogo1(arr) {
  var niilber = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      niilber += arr[i];
    }
  }
  return niilber;
}
// console.log(bodlogo1([2, 5, 10]));
/*Дасгал №2:
 Өгөгдсөн массивын эхний болон сүүлийн элемент тэнцүү бол true, үгүй бол false буцаа */
function bodlogo2(arr) {
  var hariu;
  if (arr[0] === arr[arr.length - 1]) {
    hariu = true;
  } else {
    hariu = false;
  }
  return hariu;
}
// console.log(bodlogo2([1, 2, 3, 1]));
/* Дасгал №3:
Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */
function bodlogo3(str) {
  for (var i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      console.log(str[i]);
    }
  }
}
// bodlogo3("asdfgh");

/* Дасгал №4:
Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд false утга буцаа.
[4, 5, 2, 9, 2]; ==> онцгой массив */
function bodlogo4(arr) {
  var count = 0;
  var hariu = false;
  for (var i = 0; i < arr.length; i++) {
    if ((i % 2 == 0 && arr[i] % 2 == 0) || (i % 2 == 1 && arr[i] % 2 == 1)) {
      count++;
    }
  }
  if (count == arr.length) {
    hariu = true;
  }
  return hariu;
}
// console.log(bodlogo4([2, 4, 2]));

/* Дасгал №5:
string төрлийн тоо өгөгджээ. Бүх тэгш цифрүүдийн нийлбэрийг сондгой цифрүүдийн нийлбэртэй харьцуулж тэгш цифрүүдийн нийлбэр их бол тэгш цифрүүдийн нийлбэр их байна харин сондгой цифрүүдийн нийлбэр нь их байвал сондгой цифрүүдийн нийлбэр нь их хэрвээ тэнцүү байвал цифрүүдийн нийлбэр тэнцүү байна гэсэн утга буцаа.
string төрлийн тоо ==> "1258" */
function bodlogo5(str) {
  var sondgoiToonuudiinNiilber = 0;
  var tegshToonuudiinNiilber = 0;
  var hariu;
  for (var i = 0; i < str.length; i++) {
    if (+str[i] % 2 == 0) {
      tegshToonuudiinNiilber += +str[i];
    } else if (+str[i] % 2 == 1) {
      sondgoiToonuudiinNiilber += +str[i];
    }
  }
  if (tegshToonuudiinNiilber > sondgoiToonuudiinNiilber) {
    hariu = "tegsh toonuudiin niilber ih bna.";
  } else if (sondgoiToonuudiinNiilber > tegshToonuudiinNiilber) {
    hariu = "sondgoi toonuudiin niilber ih.";
  } else {
    hariu = "tentsuu";
  }
  return hariu;
}
// console.log(bodlogo5("1694"));

/* Дасгал №6: Массиваас element устгадаг функц бич. */
function bodlogo6(arr, ustgahElement) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ustgahElement) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
// console.log(bodlogo6([1, 3, 4, 5], 3));
/*Дасгал №7
Massiv дотор хамгийн сүүлийн element-ээс бусад бүх утгуудыг нэгтгэж, хамгийн сүүлийн element-тэй таарж байгаа эсэхийг тооцож boolean утга буцаа.*/
function bodlogo7(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  if (sum === arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
// console.log(bodlogo7([1, 2, 3, 4, 10]));
/* Дасгал №8
 Массив дотор number болон string төрлийн тоонууд өгөгджээ. Зөвхөн number төрлийн тоонуудын нийлбэрийг олж буцаа. */
function bodlogo8(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(bodlogo8(["4", 8, 10, "2", 9]));

/* Дасгал №9
Массив өгөдсөн бол element тус бүрийг харгалзах indexeer нь үржүүлж үржвэрүүдийн нийлбэрийг буцаа. */
function bodlogo9(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i] * i;
  }
  return sum;
}
// console.log(bodlogo9([1, 2]));
/* Дасгал №10
 Дан boolean утгууд агуулсан массив өгөгдсөн бол, дотор нь нийт хэдэн ширхэг true утга байгааг олж буцаа. */
function dasgal10(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      sum++;
    }
  }
  return sum;
}
// console.log(dasgal10([true, false, true, true]));

/* Дасгал №11
 Гараас стринг болон индекс өгөгдсөн бол, стринг дотроос өгөгдсөн индекс хүртэлх тэмдэгтүүдийг устгаж, үлдсэн стрингийг буцаах функц бич */
function dasgal11(arr, index) {
  var a = arr.split("");
  console.log(a);
  a.splice(0, index);
  console.log(a);
  var b = a.join("");
  return b;
}
// console.log(dasgal11("hha", 2));

// object
// string, number, object, function
// this - zaagch shiree.une === this.une
var shiree = {
  ongo: "tsagaan",
  une: 150000,
  hemjee: {
    ondor: "1m",
    orgon: "50cm",
  },
  hayag: "BGD bla bla",
  taniltsuulga() {
    console.log(this.une + " unetei shiree bna.");
  },
};
// console.log("Bi " + shiree.ongo + " ongotoi shiree awlaa.");
// console.log(shiree.hemjee.orgon);
// shiree.taniltsuulga();

/* Дасгал №12
ner, dugaar, email 3-н property-tai student1, student2, student3, student4, student5 objectuud uusgeed massiv dotor hiine. promptoos email awj objectuudaa hadgalsan massiv dotorh objectuudaar dawtalt hiigeed oruulsan emailtai ali neg objectiin email taarj bhin bol tuhain emailtai objectiig consold hewle.*/
// var student1 = {
//   ner: "student1",
//   dugaar: 11111111,
//   email: "a@gmail.com",
// };
// var student2 = {
//   ner: "student2",
//   dugaar: 11111111,
//   email: "b@gmail.com",
// };
// var student3 = {
//   ner: "student3",
//   dugaar: 11111111,
//   email: "c@gmail.com",
// };
// var student4 = {
//   ner: "student4",
//   dugaar: 11111111,
//   email: "d@gmail.com",
// };
// var student5 = {
//   ner: "student5",
//   dugaar: 11111111,
//   email: "f@gmail.com",
// };
// var arrStudents = [student1, student2, student3, student4, student5];
// var email = prompt("emailee oruulna uu");
// var oldson = false;
// if (email !== null) {
//   for (var i = 0; i < arrStudents.length; i++) {
//     if (arrStudents[i].email == email) {
//       console.log(arrStudents[i]);
//       oldson = true;
//     }
//   }
// } else {
//   console.log("emailee oruulaagui bna.");
// }
// if (oldson == false) {
//   console.log("iim emailtai hereglech alga.");
// }

/* Дасгал №13
3 хайрцагны урт, өргөн болон өндрийн хэмжээг агуулсан массив өгөгджээ. нийт хайрцагнуудын эзэлхүүнүүдийг буцаа. */
// function bodlogo13(arr) {
//   var urjwer = 1;
//   var niilber = 0;
//   for (var i = 0; i < arr.length; i++) {
//     urjwer = 1;
//     for (var j = 0; j < arr[i].length; j++) {
//       urjwer *= arr[i][j];
//     }
//     niilber += urjwer;
//   }
//   return niilber;
// }

// console.log(
//   bodlogo13([
//     [1, 2, 3],
//     [2, 3, 5],
//     [4, 5, 6],
//   ])
// );

// for in dawtalt
// var myArr = ["a", "b", "c", "d"];
// for (var el in myArr) {
//   console.log(myArr[el]);
// }
/* Дасгал №14:
Books object доторх номнуудаар for in давталт ашиглан давталт хийгээд read property ni false номнуудыг console-д хэвлэ. */

// var books = {
//   book1: {
//     author: "Preeti Shenoy",
//     bookName: "A Place Called Home",
//     read: false,
//   },
//   book2: {
//     author: "Geetanjali Shree’s",
//     bookName: "Tomb of Sand",
//     read: true,
//   },
//   book3: {
//     author: "Harish Mehta",
//     bookName: "The Maverick Effect",
//     read: false,
//   },
// };

// for (var el in books) {
//   if (books[el].read == false) {
//     console.log(books[el]);
//   }
// }

/* Дасгал №15. 2 ширхэг массив өгөгдсөн бол эхний массиваас зөвхөн сондгой, 2 дахь массиваас зөвхөн тэгш утгуудыг агуулсан шинэ массив үүсгэж буцаа. */

/* Дасгал №16. Object авдаг function бичиж, keys болон value тус тусад нь салгаж буцаах функц бич. */

/* Дасгал №17
Бүхэл тооны массив мөн тоо өгөгдсөн бол тухайн тооны нийлбэр болох 2 тооны индексийг arr дотроос хайж олоод индексүүдийг нь буцаах функц бич.
Жишээ нь:
Өгөгдсөн arr = [2, 7, 11, 15], target = 9,
nums[0] + nums[1] = 2 + 7 = 9 учир [0, 1] буцаагдана. */

/* Дасгал №18. Өгөгдсөн тоог палиндром эсэхийг шалгах функц бич */
const ar = [1, 2, 3, 4];
var sum = 0;
for (var number of ar) {
  sum += number;
}
average = sum / ar.length;
// console.log(average);

/*2023.01.25 Сэдэв: es6 нэмэлтүүд */
/* №1. let, const */
/* let түлхүүр үг ашиглан зарласан хувьсагчийг нэг орчинд дахиж зарлаж өгж болохгүй. */
/* var түлхүүр үг ашиглан зарласан хувьсагч function дотроо хүчинтэй бол let -> block haalt дотроо хүчинтэй блокон хаалтнаас гадна дуудвал is not defined болсон байна. */
// let x = 4;
// let x = 6;
// var z = 5;
// var z = 6;
// function dsfa() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// dsfa();
/* const түлхүүр үг ашиглан зарласан хувьсагч доторх анхны утгыг нь өөрчилж болохгүй. Жишээ нь: Хүний овог нэр хадгалах, html таг барьж авах.*/
// const ner = "Baigal";
// ner = "dafd";
// const too123 = 123;
// too123++;
// console.log(too123);

// `` - backtick;// var age = 10;
// console.log("Minii nas bol: " + age);
// console.log(`Minii nas bol: ${age}`);

/* №2. object дээрх нэмэлтүүд */
// object-ийн function-ийг method гэж дуудна.
// es6 дээр method-ийн : function түлхүүр үгийг нь хаяж бичнэ.
// const person1 = {
//   name: "Baigal",
//   walk: function () {
//     console.log(`${this.name} walking`);
//   },
//   talk() {
//     console.log("talks");
//   },
// };
// person1.talk();

// №3. arrow functions - суман функц нь es6-c гарж ирсэн функцыг бичих илүү товч хялбар бичиглэл юм.
// function-ийг зарлаж өгөхдөө ашигладаг function түлхүүр үгийг нь хасаад суман функц гэдгийн илэрхийлэхийн тулд => зааж өгнө. Хэрвээ ганц parameterын утгатай байхын бол ()хаалтыг авахгүй байж болно. Мөн блокон хаалт дотор ганц мөртөй код байхаар бол return түлхүүр үг мөн {} ийг нь бичихгүй байж болно.
// Жишээ 1:
// const zeregtDewshuul1 = function (number) {
//   return number * number;
// };
// const zeregtDewshuul2 = (number) => number * number;
// setTimeout(() => {
//   console.log("fadsfdf");
// }, 1000);
// // // Жишээ 2:
// const books12 = [
//   { id: 1, isRead: true },
//   { id: 2, isRead: false },
//   { id: 3, isRead: true },
//   { id: 4, isRead: false },
// ];
// const unshsanNom1 = books12.filter(function (book) {
//   return book.isRead;
// });
// const unshsanNom2 = books12.filter((book) => book.isRead);

// №4. arrow functions and this
// Callback functions оbject-ийн функцдээ орохгүй байгаа учир this нь window object-ийг зааж байна.
// function e() {
//   console.log(this); // window
// }
// const person7 = {
//   name: "Baigal",
//   printThis() {
//     console.log(this);
//     function ee() {
//       console.log(this);
//     }
//     ee();
//   },
// };
// person7.printThis();

// const person2 = {
//   talk() {
//     setTimeout(function () {
//       console.log("----");
//       console.log("this ===>", this);
//     }, 2000);
//   },
// };
// person2.talk();

// Callback function дотор гаднах обьектээ заадаг болгох нь:
// const person3 = {
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log("----");
//       console.log("self ===>", self);
//     }, 1000);
//   },
// };
// person3.talk();
// setTimeout function доторх callback function ийг arrow function-оор сольж үзье.
// const person4 = {
//   talk() {
//     setTimeout(() => {
//       console.log("----");
//       console.log("arrow function доторх this ===>", this);
//     }, 3000);
//   },
// };

/* №5. Array-тай ажилладаг нэмэлт функцууд*/
// map - new array үүсгэнэ.
const colors = ["red", "green", "blue"];

const arr1 = colors.map((color) => "Энэ бол ийм өнгө: " + color);

const arr2 = colors.map(function (el) {
  return "Ene bol: " + el;
});
console.log(arr2);

// forEach
const arr3 = ["a", "b", "c"];

arr3.forEach((element) => {
  if (element == "a") {
    console.log(element);
  }
});
arr3.forEach((el) => {
  console.log(el);
});
for (var i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
// filter
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const result = words.filter((word) => word.length > 6);
// console.log(result);
// console.log(words);
// // find
// const arr3a = [5, 12, 8, 130, 44];
// const found = arr3a.find((element) => element > 10);
// console.log(found);

// // findIndex
// const arr4 = [5, 12, 8, 130, 44];
// console.log(arr4.findIndex((element) => element > 13));

// // indexOf
// const beasts = ["ant", "bison", "aa", "duck", "bison"];
// console.log(beasts.indexOf("bison"));
// console.log(beasts.indexOf("bison", 2));
// console.log(beasts.indexOf("giraffe"));

// //join
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join());
// console.log(elements.join(""));
// console.log(elements.join("+"));

//some
// const arr6 = [1, 1, 3, 5, 5];
// console.log(arr6.some((element) => element % 2 === 0));

//every
// const arr7 = [1, 30, 4, 29, 50, 13];
// console.log(arr7.every((currentValue) => currentValue < 40));

// // №6. object destructuring
const geriinHayag = {
  uls: "Монгол",
  hot: "УБ",
  duureg: "БГД",
};

// const uls = geriinHayag.uls;
// const hot = geriinHayag.hot;
// const duureg = geriinHayag.duureg;
// дээрх байдлаар хандаж хувьсагчинд хадгалсныг destructuring ашиглан доорх байдлаар бичнэ.
// const { uls, hot, duureg } = geriinHayag;
// const { uls: country } = geriinHayag;

// №7. Spread Operator
const first = [1, 2, 3, 5];
const second = [4, 5, 6];
const negtgesenMassiv = first.concat(second);
const spreadOperatorAshiglajNegtgesen = [...first, 4, 8, ...second];
// Object дээр spread operator хэрэглэх нь:
const toirog = {
  radius: 10,
  zuzaan: "10cm",
};

const ongotoiToirog = {
  ...toirog,
  color: "black",
};

console.log(ongotoiToirog);

// Дараа үзэх es6 нэмэлтүүд
// Classes;
// Promise;
// Module

// var, datatype, if statement, for loop, array, object, function, huwisagch zarlah uyed let, const, backtik, arrow function, forEach, map, object destructuring, Spread Operator, selectors, tagiin style ruu handah, classList, onclick="click hiih ueyd ajilluulah function", addEventListener, innerText, innerHTML, setTimeout, setInterval, insertAdjacentHTML, clearInterval
