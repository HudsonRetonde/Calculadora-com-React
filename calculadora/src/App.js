import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './style';
import {useState} from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumebr, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if (firstNumebr === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumebr) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if (firstNumebr === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumebr) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('-');
    }
  }

  const handleMultNumbers = () => {
    if (firstNumebr === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const mult = Number(firstNumebr) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('x');
    }
  }

  const handleDivNumbers = () => {
    if (firstNumebr === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const div = Number(firstNumebr) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('/');
    }
  }

  const handleEquals = () => {
    if(firstNumebr !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers();
          break; 
        case '-':
          handleSubNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default: console.log("default");
      }
    }
  }

  return (
    <Container>     
      
      <Content> 
             
        <Input value={currentNumber}/>

        <Row>
          <Button label="x" onClick={handleMultNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="c" onClick={handleOnClear}/>          
          <Button label="=" onClick={handleEquals}/>          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>       
      
      </Content>      
    </Container>
  );
}

export default App;
