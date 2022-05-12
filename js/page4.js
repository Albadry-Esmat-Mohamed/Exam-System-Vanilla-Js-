var fName = window.localStorage.fName;
var lName = window.localStorage.lName;
var result = window.localStorage.result;


var content = document.getElementsByClassName("content")[0];
content.innerText = `Hello ${fName} ${lName} You Score Is ${result} / 10.`;