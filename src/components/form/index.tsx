import React, {useEffect, memo} from 'react';
interface IPropriedadesForm {
    onSubmitForm: (e: any) => void,
    children: React.ReactNode,
    class:string
}

const Form = (props: IPropriedadesForm) => {
    return (
        <form className={props.class} onSubmit={props.onSubmitForm}>
            {props.children}
        </form>
    );
}

export default (Form);