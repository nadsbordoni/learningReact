import React from 'react';
//com a mudança do meu texto, meu output vai mudar onde coloquei changed. No caso so coloquei o primeiro usuario
const userInput = (props) => {
    const style = {
        background: 'grey', // fundo do textfield
        color: 'white', //cor do texto
        fontFamily: 'Raleway',
        padding: '5px',

    };
    return  <input 
    type= "text" 
    style = {style}
    onChange = {props.changed} 
    value = {props.value} />; // se eu colocar () aqui ele executa assim que carregar a pagina, a segunda parte é o que mostra no textfield
}

export default userInput;