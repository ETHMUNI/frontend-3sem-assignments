import React, { useState, useEffect } from 'react';

function Counter({ initialValue = 0 }) {
    const [count, setCount] = useState(()  => {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount, 10) : initialValue 
    });
    

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]); 

    const incrementCount = () => {
        setCount(count + initialValue);
    };

    const decrementCount = () => {
        setCount(count - initialValue);
    };

    return (
        <div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default Counter;