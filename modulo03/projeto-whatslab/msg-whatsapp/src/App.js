import React from "react";
import './App.css';
import styled from "styled-components";


const Rodape = styled.div `
border: 2px solid;
height:99vh;
width:40%;
margin: 0 auto;
position: relative;
border-radius:1%;
`

const Msg = styled.input ` 
width:65%;

`
const User = styled.input ` 
width:20%;

`
const Btn = styled.button ` 
width:10%;

`
const Mensagens = styled.div `
max-width: 100%;
margin: 0 auto;
margin-bottom: 8px;
padding: 0 15px;
text-align: center;

word-wrap: break-word;
`

const Usuario = styled.p `
font-size: 16px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

const DivRodape = styled.div `
position: absolute;
bottom: 0;
padding:4px;
display: flex;
width: 100%;
`
class App extends React.Component {
  state = {
    Mensagem: [
      {
        usuario: "",
        mensagem: ""
      } 
    ]

  };

  adicionaMensagem = () => {
    const copiaMensagem = [...this.state.Mensagem];

    const novaMensagem = {
      usuario: this.state.valorusuario,
      mensagem: this.state.valorMsg
    };

    copiaMensagem.push(novaMensagem);
    this.setState({ Mensagem: copiaMensagem });

    

  };


  onChangeusuario = (event) => {
    this.setState({ valorusuario: event.target.value });
  };

  onChangeMsg = (event) => {
    this.setState({ valorMsg: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.Mensagem.map((cadaMensagem) => {
      return (
        <Mensagens>
        <Usuario>{cadaMensagem.usuario}</Usuario>
          <p id="p-mensagem">{cadaMensagem.mensagem}</p>
          </Mensagens>
      );
    });

    return (
      <Rodape>
      <DivRodape>
        <User type="text"  onChange={this.onChangeusuario}
          value={this.state.valorusuario}
          placeholder="Usúario"/>

        <Msg type="text"  onChange={this.onChangeMsg}
          value={this.state.valorMsg}
          placeholder="Mensagem"/>
        <Btn type="button" onClick={this.adicionaMensagem}>Enviar</Btn>
        </DivRodape>
 
        {listaDeComponentes}
      </Rodape>
    );
  }
}
export default App;