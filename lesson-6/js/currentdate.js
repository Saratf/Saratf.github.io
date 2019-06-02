
//declares a variable that is going to use the function new Date()
var myDate = new Date();

//declares the arrays with the names I want to display in the date format
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//declares a variable that is going to receive all the functions necessary for the information I need with array positions
var d = (dayOfWeek[myDate.getDay()] + "," + " " + myDate.getDate() + " " + monthName[myDate.getMonth()] + " " + myDate.getFullYear());;



document.getElementById("CalendarDate").innerHTML = d;