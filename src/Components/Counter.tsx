import React from 'react';
import classes from './counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }


    return (
        <div>
            <span>{counter}</span>
            <button className={classes.button} onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;