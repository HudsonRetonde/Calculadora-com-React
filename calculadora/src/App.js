import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './style';
import {useState} from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const hundleAddNumber = (num) => {
    setCurrentNumber(prev => `${num}${prev}`)
  }


  return (
    <Container>     
      
      <Content> 
             
        <Input value={currentNumber}/>

        <Row>
          <Button label="x" onClick={() => hundleAddNumber('x')}/>
          <Button label="/" onClick={() => hundleAddNumber('/')}/>
          <Button label="c" onClick={() => hundleAddNumber('c')}/>
          <Button label="#" onClick={() => hundleAddNumber('#')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => hundleAddNumber('7')}/>
          <Button label="8" onClick={() => hundleAddNumber('8')}/>
          <Button label="9" onClick={() => hundleAddNumber('9')}/>
          <Button label="-" onClick={() => hundleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => hundleAddNumber('4')}/>
          <Button label="5" onClick={() => hundleAddNumber('5')}/>
          <Button label="6" onClick={() => hundleAddNumber('6')}/>
          <Button label="+" onClick={() => hundleAddNumber('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => hundleAddNumber('1')}/>
          <Button label="2" onClick={() => hundleAddNumber('2')}/>
          <Button label="3" onClick={() => hundleAddNumber('3')}/>
          <Button label="=" onClick={() => hundleAddNumber('=')}/>
        </Row>       
      
      </Content>      
    </Container>
  );
}

export default App;
