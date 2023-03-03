import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Label = styled.label`
  color: #808080;
  font-size: 14px;
`;
const Input = styled.input`
  background-color: none;
  border: 3px solid  #808080;
  border-radius: 8px;  
  font-size: 40px;
  width: 200px;
  height: 100px;
  text-align: center;
  
`;

const tempTypes = {
    'k':"kelvin" ,
    'c':"celcius" ,
    'f':"farenheit" 
}

function TemperatureInput(props){
    function handleChange(e) {
        props.onTemperatureChange(e.target.value,props.scale);        
      }
    

    return <Container>
     <Label>
        Enter Temperature in {tempTypes[props.scale]} :
      </Label>
      <Input        
        type="number"        
        value={props.temperature}
        onChange={handleChange}                     
      />
  </Container>
}

export default TemperatureInput;