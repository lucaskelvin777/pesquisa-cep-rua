import React from 'react';
import './style.css'
interface IPropriedadesInput {
    onChangeText: (e: any) => void;
    placeholder: string;
    value: string;
    required?:boolean

}
const Input = (props: IPropriedadesInput) => {
    return <input 
        className="input-form"
        onChange={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        required={props.required}
    />;
}

export default Input;