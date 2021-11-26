import React from 'react';
import styled from "styled-components";

const  PequenoCard = styled .div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const ImagemPCard = styled .img `
width: 50px;
margin-right: 10px;
border-radius: 50%;
`
   

function CardPequeno(props) {
    return (
        <>
        <PequenoCard>
            <ImagemPCard src={ props.imagem } />
            <div>
                <h4>{ props.info }</h4>
              
            </div>
        </PequenoCard>
        </>
    )
}

export default CardPequeno;