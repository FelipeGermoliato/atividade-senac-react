import React from 'react';

function CardPerfil(props: any) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        width: '350px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        gap: '15px'
      }}
    >
      <img
        src={props.imagemUrl}
        alt={`Foto de ${props.nome}`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '10px',
          objectFit: 'cover'
        }}
      />
      <div>
        <h3 style={{ margin: '0 0 5px 0', color: 'black' }}>{props.nome}</h3>
        <p style={{ margin: 0, color: 'black' }}>{props.idade} anos</p>
      </div>
    </div>
  );
}

export default CardPerfil;