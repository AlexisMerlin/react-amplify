import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("Use state. Montando el componente")
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, date)

    return (
        <>
            <h1> Hola React</h1>
            <h2> Esto es un reloj</h2>
            <h3>{date.toLocaleString()}</h3>
        </>
    )
};

export default Clock;