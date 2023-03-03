const express = require("express");
const bodyParser = require("body-parser")
  
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));


function toCelsiusWithFahrenheit(fahrenheit) {
    if (fahrenheit < -459.68) return '.';
    return ((fahrenheit - 32) * 5) / 9;
  }
  
  function toCelsiusWithKelvin(kelvin) {
    if (kelvin < 0) return '.';
    return kelvin - 273.15;
  }
  
  function toFahrenheitWithCelsius(celsius) {
    if (celsius < -273.15) return 'Invalid Temp';
    return (celsius * 9) / 5 + 32;
  }
  
  function toFahrenheitWithKelvin(kelvin) {
    if (kelvin < 0) return 'Invalid Temp';
    return (kelvin - 273.15) * (9 / 5) + 32;
  }
  
  function toKelvinWithCelsius(celsius) {
    if (celsius < -273.15) return 'Invalid Temp';
    return celsius + 273.15;
  }
  
  function toKelvinWithFahrenheit(fahrenheit) {
    
    if (fahrenheit < -459.68) return 'Invalid Temp';
    return (fahrenheit + 459.67) * (5 / 9);
  }

app.post("/tempConverter", function(req, res) {
  var from = req.body.from.toLowerCase();
  var to = req.body.to.toLowerCase();  
  var tempValue = Number(req.body.value);
  var result
  
  switch(to){
    case "k":
        if (from === 'f'){
            result = toKelvinWithFahrenheit(tempValue)
        }else{
            result = toKelvinWithCelsius(tempValue)
        }
        
        break;
    case "c":
        if (from === 'k'){
            result = toCelsiusWithKelvin(tempValue)
        }else{
            result = toCelsiusWithFahrenheit(tempValue)
        }
        
        break;
    case "f":
        if (from === 'c'){
            result = toFahrenheitWithCelsius(tempValue)
        }else{
            result = toFahrenheitWithKelvin(tempValue)
        }
        
        break
    default:
        console.log("Invalid temperature scale")
  }
    
  
  const responseData = {
    result:result,
 
}


 
const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
});
  
app.listen(3000, function(){
  console.log("server is running on port 3000");
})