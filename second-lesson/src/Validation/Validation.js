import React from 'react';
//desse jeito é mais elegante e a prova de erros
const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLenght <= 5) {
        validationMessage = 'Text too short!';
    }
    return (
        <div>
          <p> {validationMessage} </p>
        </div>
    )
};

export default validation;