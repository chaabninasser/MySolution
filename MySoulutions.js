// date 2015-05-03

var day = "03";
var month = "05";
var year = "2015";

newdate = year + "-" + month + "-" + day;
console.log(newdate)


// copie objet 

var prop = {id:1,
name: "Nasser",
lastname:"Chaabni",
age:27,
test: true};

var copie = {...prop};

console.log(copie);



//afficher l'objet s'il exist

var a={name:"nasser",
lastname:"Chaabni",
age:27
}
if (typeof a === "object"){a}else{"nothing"}

