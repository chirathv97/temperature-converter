import './App.css';
import TemperatureInput from './components/TemperatureInput'
import { useState } from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

function toCelsiusWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
  return ((fahrenheit - 32) * 5) / 9;
}

function toCelsiusWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return kelvin - 273.15;
}

function toFahrenheitWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return (celsius * 9) / 5 + 32;
}

function toFahrenheitWithKelvin(kelvin) {
  if (kelvin < 0) return '.';
  return (kelvin - 273.15) * (9 / 5) + 32;
}

function toKelvinWithCelsius(celsius) {
  if (celsius < -273.15) return '.';
  return celsius + 273.15;
}

function toKelvinWithFahrenheit(fahrenheit) {
  if (fahrenheit < -459.68) return '.';
  return (fahrenheit + 459.67) * (5 / 9);
}

function validateAndConvert(temperature, convert) {
  const input = parseFloat(temperature);
  
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  if (output === "."){
    console.log("Invalid temperature")
    return ''
  }else{
    const rounded =output.toFixed(2);
    return rounded.toString();
  }
 
}

function App() {
  const [currentScale, setScale] = useState('c');
  const [currentTemperature, setTemperature] = useState('');
  
  function handleTempChange(temperature,scale) {
    setScale(scale);
    setTemperature(temperature);
  }

  const celsius =
    currentScale === 'f'
      ? validateAndConvert(currentTemperature, toCelsiusWithFahrenheit)
      : currentScale === 'k'
      ? validateAndConvert(currentTemperature, toCelsiusWithKelvin)
      : currentTemperature;

  const fahrenheit =
    currentScale === 'c'
      ? validateAndConvert(currentTemperature, toFahrenheitWithCelsius)
      : currentScale === 'k'
      ? validateAndConvert(currentTemperature, toFahrenheitWithKelvin)
      : currentTemperature;

  const kelvin =
    currentScale === 'c'
      ? validateAndConvert(currentTemperature, toKelvinWithCelsius)
      : currentScale === 'f'
      ? validateAndConvert(currentTemperature, toKelvinWithFahrenheit)
      : currentTemperature;

  return (
    <div className="App"> 
    <Container>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleTempChange}  />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleTempChange}   />         
      <TemperatureInput scale="k" temperature={kelvin} onTemperatureChange={handleTempChange}  />       
    </Container>    
    </div>
  );
}

export default App;
