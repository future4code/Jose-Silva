import React from 'react';
import styled from "styled-components";

const BigCard = styled.div `
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 250px;
text-align: left;
`
const ImagemBigCard = styled.img `
width: 120px;
margin-right: 10px;
`
const CorpoBigCard = styled.div `
display: flex;
flex-direction: column;
justify-items: flex-start;
`

const NomeEmpresa = styled.h4 ` 
margin-bottom: 15px;
`

const Info = styled.p ` 
margin-top: 5px;
margin-bottom: 5px;
color: rgb(151, 147, 147);
width:auto;
font-size:16px;

`



function CardGrande(props) {
    

    return (
        <>
        <BigCard>
            <ImagemBigCard src={ props.imagem } />
            <CorpoBigCard>
                <NomeEmpresa>{ props.nome }</NomeEmpresa>
                <Info>{ props.descricao }</Info>

                <p>{ props.info}</p>
                <Info>{props.periodo}</Info>
            </CorpoBigCard>
        </BigCard>
        </>
    )
}

export default CardGrande;