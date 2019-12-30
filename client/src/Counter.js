import React, {userState, useState} from 'react';

function Counter()
{
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>The counter count is: {count}</h2>
            <button onClick = {() => setCount(count + 1)}>Add count</button>
        </div>    

    );
}

export default Counter;