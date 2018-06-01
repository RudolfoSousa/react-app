import React, { Component } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      job: false,
      clients: 0,
      alert: "",
      time: Math.floor(Math.random() * (6000 - 2000) + 2000),
      timeProcess: 10000,
      max: 2,
      clientsMax: 5
    }
  }


clientGo(clientsMax) {
  setTimeout(() => {
    var num = Math.floor(Math.random() * (this.state.max - 0) + 0);
    console.log("O número escolhido foi " + num);
    if( num == 1 ){
      console.log("Cliente na fila")
      this.setState({
        clients: this.state.clients + 1
      })

    }else{
      console.log("Não chegou cliente");
      this.setState({
        clients: this.state.clients
      })
    }
  }, this.state.time)
};

processClient() {
 // setInterval( () => {
 //   this.setState({
 //     clients: this.state.clients - 1
 //   })
 // }, this.state.timeProcess )
};

  render() {

    const clientsMax = this.state.clientsMax;

    var status = "Aberto!";

    this.state.clients <= clientsMax - 1 ? this.clientGo(clientsMax) : status = "Fechado!"
    // this.clientGo(clientsMax);
    this.state.clientes != 0 ? this.processClient() : console.log("parou de trabalhar");

    var job = this.state.job;
    var clients = this.state.clients;

    if ( (job) || (clients >= 1) ) {
      job = <p className="status danger">Cortando cachos!</p>
    }else{
      job = <p className="status free">Descansando</p>
    }


    return (
      <div className="App">
        <Header title="Barbearia" />
        <Intro introContent="Aplicação de simulação de uma barbearia" />
        <Intro introContent={status} />
        <div className="container">
          <div className="coluns">
            <div className="colun left-colun">
              <Intro introContent="Barbeiro"/>
              <div>{job}</div>
            </div>
            <div className="colun right-colun">
              <Intro introContent="Clientes"/>
              <p className="number-clients">{this.state.clients} clientes</p>
              <p>{this.state.alert}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
