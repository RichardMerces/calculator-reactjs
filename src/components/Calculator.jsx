import React, { useState } from 'react';
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [numst, setNumst] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    let input = e.target.value
    if (num === 0) { 
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  function clear() {
    setNum(0);
  };

  function percent() {
    setNum(num / 100);
  };

  function changeSign() {
    if (num>0) {
      setNum(-num);
    } else if (num<0) {
      setNum(Math.abs(num));
    }
  };

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setNumst(num);
    setNum(0);
  };
  
  function submit() {
    switch(operator){
      case "+":
        setNum(parseFloat(numst) + parseFloat(num));
        break;
      case "-":
        setNum(parseFloat(numst) - parseFloat(num));
        break;
      case "x":
        setNum(parseFloat(numst) * parseFloat(num));
        break;
      case "/":
        setNum(parseFloat(numst) / parseFloat(num));
        break;
    }
    console.log("Calculou!");
    console.log(numst);
    console.log(operator);
    console.log(num);
  };

  return (
    <>
    <Box m={5}/>
      <Container maxWidth="xs">
        <div className='wrapper'>
          <Box m={12}/>
          <div className='result'>{num}</div>
          <button className='light-gray' onClick={clear}>AC</button>
          <button className='light-gray' onClick={changeSign}>+/-</button>
          <button className='light-gray' onClick={percent}>%</button>
          <button className='orange' onClick={operatorHandler} value='/'>/</button>
          <button className='dark-gray' onClick={inputNum} value='7'>7</button>
          <button className='dark-gray' onClick={inputNum} value='8'>8</button>
          <button className='dark-gray' onClick={inputNum} value='9'>9</button>
          <button className='orange' onClick={operatorHandler} value='x'>x</button>
          <button className='dark-gray' onClick={inputNum} value='4'>4</button>
          <button className='dark-gray' onClick={inputNum} value='5'>5</button>
          <button className='dark-gray' onClick={inputNum} value='6'>6</button>
          <button className='orange' onClick={operatorHandler} value='-'>-</button>
          <button className='dark-gray' onClick={inputNum} value='1'>1</button>
          <button className='dark-gray' onClick={inputNum} value='2'>2</button>
          <button className='dark-gray' onClick={inputNum} value='3'>3</button>
          <button className='orange' onClick={operatorHandler} value='+'>+</button>
          <button className='special-gray' onClick={inputNum} value='0'>0</button>
          <button className='dark-gray' onClick={inputNum} value='.'>.</button>
          <button className='orange' onClick={submit} value>=</button>
        </div>
      </Container>
    </>
    
  )
}
