import React,{ memo} from 'react';
import './style.css';
interface IPropriedades{
    onclick?:()=>void,
    children:React.ReactNode
}


const Button = (props:IPropriedades) => {
  return (
        <button className="botao" onClick={props.onclick}>
            {props.children}
        </button>
  );
}

export default memo(Button);