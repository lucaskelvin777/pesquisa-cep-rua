import React,{memo} from 'react';
import ICep from './../../Interfaces/ICep';
import Card from './../card/index';
interface ListDadosProps{
  dados:ICep[]
}
const index = (props:ListDadosProps) => {
  return (
    <div>
     
    {props.dados.map(element => (
      <Card key={element.cep} titulo={element.cep}>
        <p>Bairro: {element.bairro}</p>
        <p>Cidade: {element.localidade}</p>
        <p>Rua: {element.logradouro}</p>
        <p>Estado: {element.uf}</p>
      </Card>
  
    ))}
  
    </div>
  );
}

export default memo(index);
