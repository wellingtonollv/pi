import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Button from './components/button/Button'
import Label from './components/label/Label'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  switchButton = () => {
    this.setState({open: !this.state.open})
    console.log(this.state.open)
    
  }
  componentDidMount(){
    
  }

  render() {
    
    return (
      
      <div>
       
        <div className={'container'}>
          <div className={"flex-item"}>
            <Label name="Abrir Gaveta" number="1" />
          </div>
          <div className={"flex-item"}>
            <Button name="MOTOR" switchButton={this.switchButton}  />
          </div>
          <div className={"flex-item"}>
            <Label name="ACIONAMENTO" number="2" />
          </div>
          <div className={"flex-item"}>
            <Button name="LED" />
          </div>
          <div className={"flex-item"}>
            <Label name="ACIONAMENTO" number="3" />
          </div>
          <div className={"flex-item"}>
            <Button name="CAIXA" />
          </div>
        </div>
      </div>
    )
  }
}
