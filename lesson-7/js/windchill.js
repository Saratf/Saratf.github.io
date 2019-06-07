/*Add a computed wind chill value to the weather summary on the town page. The windchill value is a computed value using the current 
temperature and wind speed which values you will extract from the page using JavaScript. The formula for calculating the wind chill 
temperature factor is given below. 
Create a "windchill.js" file and add it to your "script" folder in the "lesson-7" folder. The "windchill.js" that 
1) gathers the two input values from the weather summary, 
2) calculates the windchill value, and 
3) outputs the result to the new line item in the weather summary.
The formula to calculate the wind chill factor is 
LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16} f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , 
where f is the wind chill factor in Fahrenheit, 
t is the air average temperature in Fahrenheit, and 
s is the wind speed in miles per hour.*/

//Declare the variables - gathers the two input values from the weather summary

var t = parseInt(document.getElementById('Temperature').innerHTML);

var s = parseInt(document.getElementById('WindSpeed').innerHTML);



//calculates the windchill value 

var Fahrenheit = 35.74 + Math.pow(0.6215, t) - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

//outputs the result to the new line item in the weather summary

document.getElementById('output').innerHTML = "Wind chill: " + Fahrenheit.toPrecision(2) + "&#176;";






