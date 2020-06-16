import React, {memo, useEffect} from 'react';
import './style.css'
interface IPropriedadesInput {
    onChangeText: (e: any) => void;
    value: string;
    required?: boolean,
    children: React.ReactNode

}
const Select = (props: IPropriedadesInput) => {
    return (
        <select
            className="select"
            value={props.value}
            onChange={props.onChangeText}
            required={props.required}>
            {props.children}
        </select>
    );
}

export default memo(Select);