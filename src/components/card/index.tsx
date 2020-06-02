import React from 'react';
import './style.css';
interface IPropriedadesCard{
    titulo:string,
    children:React.ReactNode
}
const Card = (props:IPropriedadesCard) => {
  return (
      <div className="card">
          <div className="titulo">
              {props.titulo}
              <hr/>
          </div>
          <div className="body">
              {props.children}
          </div>
      </div>
  );
}

export default Card;