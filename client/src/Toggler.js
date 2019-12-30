import React from 'react';
import UseToggle from './hoc/UseToggle';

function Toggler (){
    const [happy , toggleHappy] = UseToggle(true);
    const [day, toggleDay] = UseToggle(true);
    const [banana, toggleBanana] = UseToggle(true);

    return(
        <div>
            <h1 onClick = {toggleHappy}>{happy ? "Happy" : "Not happy"}</h1>
            <h1 onClick = {toggleDay} >{day ? "Day" : "Night"}</h1>
            <h1 onClick = {toggleBanana} >{banana ? "Banana" : "Not Banana"}</h1>
        </div>
    )
}

export default Toggler;