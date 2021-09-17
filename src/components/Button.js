import React from 'react';
import {Btn} from './styles'

export default function Button({onClick,label, style,addDigito}){

    return(
        <Btn style={style} onClick={()=>label === 'C' || label === '<' || label === '='? onClick() : addDigito(label)}>{label}</Btn>
    )
}