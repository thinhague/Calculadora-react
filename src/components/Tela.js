import React from "react";
import { Visor, TelaOper, TelaRes } from "./styles";


export default function Tela({valor, res}) {

    return (
        <Visor>
            <TelaOper>{valor}</TelaOper>
            <TelaRes>{res}</TelaRes>
        </Visor>
    )
}