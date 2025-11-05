// n1 = "dhoni"
// n2 = "virat"
// n3 = "rohit"
// n4 = "sachin"

// names = ["dhoni","virat","rohit","sachin"]

// console.log(names[0])

/*
let info_arr = ["sakthi", 24, "java", 5];

let info_ob = { name: "sakthi", age: 24, lang: "java", exp: 5 };

//document.writeln(info_ob.name)

function greet(name) {
  document.writeln("welcome " + name + "<br>");
}

greet("dhoni");
greet("virat");
greet("Rohit");

let list1 = { m1: 90, m2: 98, m3: 95 };
let list2 = { m1: 80, m2: 88, m3: 85 };

function calcTotal(a) {
  let total = a.m1 + a.m2 + a.m3;
  document.writeln(total + "<br>");
}

calcTotal(list1);
calcTotal(list2);

*/

// To do list task printing using function

todos1 = ["Learn JS", "Do Assignment","Take Break"]
todos2 = ["Code" ,"Eat", "Sleep","Repeat"]
todos3 = ["whtsapp" ,"insta", "snapchat","facebook"]

function toDoTaskPrinter(todolist){

    for(let i=0;i<todolist.length;i++)
        console.log("Task "+(i+1)+" : "+todolist[i])
    
    console.log("----------------------------------------")
}


toDoTaskPrinter(todos1)
toDoTaskPrinter(todos2)
toDoTaskPrinter(todos3)

