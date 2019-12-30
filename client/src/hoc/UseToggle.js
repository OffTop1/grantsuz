import {useState} from 'react';

function UseToggle(initialVal = false){

    const [state, setState] = useState(initialVal);

    const Toggle = () => {
        setState(!state);
    }

    return [state, Toggle];
}

export default UseToggle;