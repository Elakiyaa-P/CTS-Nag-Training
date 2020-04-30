console.log("Student Details");
var stuTuple1 = ["Elakiyaa Elite", 21, "SVCE"];
console.log("Name of the Student:" + stuTuple1[0]);
console.log("Age of the Student:" + stuTuple1[1]);
console.log(stuTuple1[0] + " is studying in " + stuTuple1[2]);
//Addtion of Items
console.log("Adding Elements using PUSH");
var empTuple1 = ["Pratheepa Vignesh", 25, "MBit"];
console.log("Tuple Elements before Addition:" + empTuple1);
empTuple1.push(1001);
console.log("Length of Tuple Items after push:" + empTuple1.length);
console.log("Items after Addition:" + empTuple1);
//Deletion of Items
console.log("Deleting Elements using POP");
var empTuple2 = ["Pratheepa Vignesh", 25, "MBit"];
console.log("Tuple Elements before Deletion:" + empTuple2);
empTuple2.pop();
console.log("Length of Tuple Items after pop:" + empTuple2.length);
console.log("Items after Deletion:" + empTuple2);
//Updating the tuple
console.log("Updating or Modifying Elements");
var stuTuple2 = ["Elakiyaa Elite", 21, "SVCE"];
stuTuple2[1] = 18;
console.log("Name of the Student:" + stuTuple2[0]);
console.log("Age of the Student:" + stuTuple2[1]);
console.log(stuTuple2[0] + " is studying in " + stuTuple2[2]);
//# sourceMappingURL=tuple.js.map