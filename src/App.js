import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'
import Label from './components/label/Label'

function App() {
  return (
    <div className={'container'}>
      <div className={"flex-item"}>
        <Label name="ACIONAMENTO" number="1"/>
      </div>
      <div className={"flex-item"}>
        <Button name="MOTOR" />
      </div>
      <div className={"flex-item"}>
      <Label name="ACIONAMENTO" number="2"/>
      </div>
      <div className={"flex-item"}>
        <Button name="LED" />
      </div>
      <div className={"flex-item"}>
      <Label name="ACIONAMENTO" number="3"/>
      </div>
      <div className={"flex-item"}>
        <Button name="CAIXA" />
      </div>


    </div>
  );
}

export default App;
