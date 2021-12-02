import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
   
          {
            nomeUsuario: "Paulinha",
            fotoUsuario: "https://picsum.photos/50/50",
            fotoPost: "https://picsum.photos/200/150"
          },
          {
            nomeUsuario: "jose",
            fotoUsuario: "https://picsum.photos/20/20",
            fotoPost: "https://picsum.photos/200/160"
          },
           {
            nomeUsuario: "renato",
            fotoUsuario: "https://picsum.photos/50/50",
            fotoPost: "https://picsum.photos/200/151"
          }
        ],

          newUsuario: "",
          newFotoUsuario: "",
          newFotoPost: ""
          
    
  };

  addUsuario = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaPessoa = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nome: this.state.newUsuario,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      email: this.state.newFotoUsuario
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novoPessoas = [...this.state.posts, novaPessoa];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ posts: novoPessoas });
  };

  onChangeInputPessoa = (event) => {
   
    this.setState({ newUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
   
    this.setState({ newFotoUsuario: event.target.value });
  };

  onChangeFotoPost= (event) => {
    
    this.setState({ newFotoPost: event.target.value });
  };


  render() {

    const listaDePosts= this.state.posts.map((post) => {
      return (
        <>
     
        <p>
          <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>
        </p>
        </>
      );
    });
    return (
      <div>

      <MainContainer>
      <input
          // Mesma lógica do exemplo anterior
          value={this.state.newUsuario}
          // Repare na função que é passada aqui no onChange
          onChange={this.onChangeInputPessoa}
          placeholder={"Nome"}
        />
        <input
          // Mesma lógica do exemplo anterior
          value={this.state.newFotoUsuario}
          // Repare na função que é passada aqui no onChange
          onChange={this.onChangeFotoUsuario}
          placeholder={"Imagem de Perfil"}
        />
        <input
          // Diferente do input acima, a variável de estado aqui é outra
          value={this.state.newFotoPost}
          // E a função também é outra
          onChange={this.onChangeFotoPost}
          placeholder={"Imagem do Post"}
        />
        <button onClick={this.addUsuario}>Adicionar</button>
        
       
        <div>{listaDePosts}</div>
      </MainContainer>
      </div>

    );
  }
}

export default App;
