import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        
        const promesa = new Promise((resolve, reject) => {
            resolve("Mensaje desde promesa");
        });

        promesa.then(console.log);
        console.log("Use state. Montando el componente")
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, [])

    return (
        <>
            <h2> Esto es un reloj</h2>
            <h3>{date.toLocaleString()}</h3>
        </>
    )
};

export default Clock;