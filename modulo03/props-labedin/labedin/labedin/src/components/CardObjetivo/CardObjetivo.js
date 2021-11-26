import React from 'react';
import styled from "styled-components";

const  Objetivo = styled .div `
    align-items: center;
    border: 1px solid black;
    display: flex;
    height: 80px;
    background-color:whitesmoke;
    color:black;
    text-align: center;
    justify-content:center;np
`

   

function CardObjetivo() {
    return (
        <>
        <Objetivo> Objetivo:
            <div>
                <h4> Desenvolvedor Full-Stack</h4>
              
            </div>
        </Objetivo>
        </>
    )
}

export default CardObjetivo;