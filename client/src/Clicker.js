import React, {useState, useEffect} from 'react';

function Clicker()
{
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `Clicked me ${count} times`
    })

    return (
        <button onClick = {() => setCount(count + 1)}>Click me {count}</button>
    )
}

export default Clicker;