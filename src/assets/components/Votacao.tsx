import React, { useState } from 'react';
import Dump from './Dump';

function Votacao() {
  // Aqui coloquei o que apredemos em aula par ainiciar do 0 o ontador 
  const [gostei, setGostei] = useState(0);
  const [naoGostei, setNaoGostei] = useState(0);
  const total = gostei + naoGostei;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bora lá vamos fazer uma votação. Fala para gente, você: </h2>

      {/* Usando novamente  o onClick aqui ele vai contar os votos e quando clicar
      vai somar mais 1 no contador do gostei. */}
      <button onClick={() => setGostei(gostei + 1)}>Gostou</button>

      {/* mesma coisa de cima*/}
      <button onClick={() => setNaoGostei(naoGostei + 1)} style={{ marginLeft: '10px' }}>
        Não Gostou
      </button>

      {/*  Aqui vai mostrar quantos votos que foi clicado.
  */}
      <p style={{
  fontSize: '25px',
  fontWeight: 'bold',
  color: '#2E7D32', 

}}>
  Gostei: {gostei}
</p>

<p style={{
  fontSize: '25px',
   marginTop: '-30px',
  fontWeight: 'bold',
  color: '#C62828', 
}}>
  Não gostei: {naoGostei}
</p>
<p style={{
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#800080', 
  marginTop: '-12px',
  fontStyle: 'italic',
}}>
 Total de votos recebidos: {total}
</p>
    </div>
  );
}

export default Votacao;