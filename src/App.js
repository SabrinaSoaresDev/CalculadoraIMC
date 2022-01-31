import {useState} from 'react';
import './App.css';


export default function App(){
  const [peso, setPeso]= useState('');
  const[altura, setAltura]=useState('');

  const [mensagem, setMensagem] =useState('');

  

  function calcularIMC(){
    const alt = altura /100;
    const imc = peso / (alt * alt);
    if(imc < 18.6){
      setMensagem("voce esta abaixo do peso! seu IMC:" + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! seu IMC:" + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("voce esta levemente acima do peso! seu IMC:" + imc.toFixed(2))
    }else if(imc > 34.9){
      setMensagem("Cuidado Obesidade! seu IMC:" + imc.toFixed(2))
    }
  }
  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
    <input 
      type="text"
      placeholder="Peso em (kg) EX:90"
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
    />
    <input 
      type="text"
      placeholder="Altura em (cm) EX:180"
      value={altura}
      onChange={(e) => setAltura(e.target.value)}
    />
    <button onClick={calcularIMC}>
      Calcular
    </button>
      </div>

      <h2>{mensagem}</h2>
    </div>

  );
}