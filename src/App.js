import { useState } from 'react';
import './App.css';

export default function App() {
const  [peso, setPeso] = useState('');
const  [altura, setAltura] = useState('')
const [message, setMessage] = useState('')

function calculaImc(){
 const alt = altura / 100;
 const imc = peso / (alt * alt);
 if(imc < 18.6){
  setMessage('Você esta abaixo do peso! Seu IMC:'+ imc.toFixed(2));
 }

 else if(imc >= 18.6 && imc < 24.9){
  setMessage('Você esta no seu peso ideal! Seu IMC:'+ imc.toFixed(2));
 }

 else if(imc >= 24.9 && imc < 34.9){
  setMessage('Você esta levemente acima do peso! Seu IMC:'+ imc.toFixed(2));
 }
 
 else if(imc < 34.9){
  setMessage('Cuidado obesidade! Seu IMC:'+ imc.toFixed(2));
 }
}

return(
  <><div className="app">
    <h1>Calculadora de IMC</h1>
    <span>Vamos calcular seu imc?</span>

    <div className="area-input">
      <input
        type="text"
        placeholder="Peso em (kg) ex:90"
        value={peso}
        onChange = {(event) => setPeso(event.target.value)} 
        />
      <input
        type="text"
        placeholder="altura em (cm) ex:180" 
        value={altura}
        onChange = {(event) => setAltura(event.target.value)} />
      <button 
      onClick = { calculaImc }
      >
        Calcular
      </button>
    </div>
  </div><h2>{message}</h2></>
)
}

