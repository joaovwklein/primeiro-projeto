
import './App.css';

import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';

import Ney from './assets/ney.jpg'
import OutroComponent from './components/OutroComponent';
import ComponentORemake from './components/ComponentORemake';

function App() {

  const n = 15
  const classDiferente = true 
  return (
   <div className="App">

   <ComponentORemake/> 

    <h1>Texto teste</h1>
    {/* Css no proprio modulo */}
    <OutroComponent/>
   {/* Css inline  */}
    <p style ={{color:"blue",padding:"25px", backgroundColor:"red"}}>Este paragrafo e do App.jsx</p>

    <h3 style={n > 10 ? ({color:"green" , backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }>Aqui tem um texto com o primeiro estilo</h3>

    <h3 style={n < 10 ? ({color:"green" , backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }>Aqui tem um texto com o segundo estilo</h3>


    {/* Class diferente de acordo com a verificação */}
    <h2 className={classDiferente ? "red-title" : "normal-title" }>TEXTO CLASSE DIFERENTE 1</h2>


   <img src='./cr7.jpg' width={900} height={400}></img>
    <img src={Ney} alt='Sim' width={900} height={400}></img>


    {/* <FirstComponent/>
    <TemplateExpression/>
    <MyComponent/> */}

    
   </div>
  );
}

export default App;
