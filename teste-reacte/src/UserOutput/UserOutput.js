import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
     <div className = 'UserOutput'>
         <p> My name is {props.username} </p>
         <p> Mas são dois paragrafos</p>
     </div>
    )
}

export default userOutput;