import './App.css';
import CardVideo from './CardVideo';
function App(props) {
  
  const imgSearch = 'https://cdn-icons-png.flaticon.com/512/76/76824.png';

  
  return (
    <div className="App">
   <header>
    <div id="cabecalho">
        <h2> FutureTube</h2>
        </div>
        <div id="busca">
        <input placeholder="Busca"></input><button>
          <img alt="search" src={imgSearch} 
          /></button> </div>
    </header>

    <div id="conteudo-principal">

<main>
  <CardVideo titulo1 ="#1 - Irlanda" 
  url="https://storage.googleapis.com/future-apis.appspot.com/1.mp4"/>

<CardVideo titulo1 ="#2 - Ciência" 
  url="https://storage.googleapis.com/future-apis.appspot.com/2.mp4 "/>
 
 <CardVideo titulo1 =" #3 - Mutações" 
url={"https://storage.googleapis.com/future-apis.appspot.com/3.mp4"}/>

<CardVideo titulo1 ="#4 - Nordeste" 
url={"https://storage.googleapis.com/future-apis.appspot.com/4.mp4"}/>

  
 
 
<CardVideo titulo1 ="##5 - Natureza" 
url={"https://storage.googleapis.com/future-apis.appspot.com/5.mp4"}/>

<CardVideo titulo1 ="#6 - Nordeste" 
url={"https://storage.googleapis.com/future-apis.appspot.com/6.mp4"}/>

<CardVideo titulo1 ="#7 - Universo" 
url={"https://storage.googleapis.com/future-apis.appspot.com/7.mp4"}/>

<CardVideo titulo1 ="#8 - Uruguai" 
url={"https://storage.googleapis.com/future-apis.appspot.com/9.mp4"}/>
  

</main>


</div>





    </div>
  );
}

export default App;
