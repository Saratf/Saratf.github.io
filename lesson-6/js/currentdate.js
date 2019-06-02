function dateForFooter() {

var myDate = new Date();

var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



var FooterDate = [dayOfWeek.getDay()] + getDate() + [monthName.getMonth()] + myDate.getFullYear();

document.getElementById('outputdiv').innerHTML = FooterDate;

}