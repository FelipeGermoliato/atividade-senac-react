import React, { useState } from 'react';

function MudarCorTexto() {
  //Aqui seguimos o mesmo formato das ultimas atividades, onde coloquei no verde brat
  //Coloquei uma cor iniciar, entao iremos iniciar na cor Preto
 
  const [cor, setCor] = useState('black');

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: cor }}> Oiii, vou mudar de cor</h1>
      
      {/*Aqui usei o que voce tinha ensinado, usar uma propriedade onClick 
     para quando clicar nesse botao ele vai chamar a funccao seCor e isso vai 
     atualizar o estado da cor para os botoes abaixo  */}
     
      <button onClick={() => setCor('red')} style={{ marginLeft: '10px', color:'red'}}>Vermelho</button>
      <button onClick={() => setCor('green')} style={{ marginLeft: '10px', color:'green'}}>Verde</button>
      <button onClick={() => setCor('blue')} style={{ marginLeft: '10px', color:'blue' }}>Azul</button>
      <button onClick={() => setCor('black')} style={{ marginLeft: '10px' , color:'silver'}}>Cor Padrao</button>
    
    </div>

)
}

export default MudarCorTexto;