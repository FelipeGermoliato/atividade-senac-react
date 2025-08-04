import React, { useState } from 'react';

function AvaliacaoEstrelas() {
  // aqui comecei 0, para aparecer as estrelas vazias
  const [nota, setNota] = useState(0);
  const selecionarEstrela = (estrelaNumero: number) => {
    setNota(estrelaNumero);
  };

  return (
    <div style={{ fontSize: '30px', padding: '20px' }}>
      <h2>Avalie com estrelas:</h2>
      

         {/* Aqui eu usei o map porque queria fazer 5 estrelas uma do lado da outra.*/}
      {[1, 2, 3, 4, 5].map((estrela) => (
        <span
          key={estrela}
          onClick={() => selecionarEstrela(estrela)} 
          style={{
            cursor: 'pointer',
            color: estrela <= nota ? '#FFD700' : '#ccc' 
          }}
        >
          {estrela <= nota ? '⭐' : '☆'} 
        </span>
      ))}

     
      <p style={{ marginTop: '10px' }}>Você deu nota: {nota}</p>
    </div>
  );
}

export default AvaliacaoEstrelas;