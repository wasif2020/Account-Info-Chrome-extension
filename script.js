const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d=new Date();
document.getElementById("text1").innerHTML ="Day :" + days[d.getDay()];
