'use client';

import { useEffect, useState } from "react";

const Practice = () => {
    const [name, setName] = useState('Jaspreet');
    const [count, setCount] = useState(0);

    const handleButton = () => {
        setName('John');
    }

    useEffect(() => {
        console.log('Client-side effect');
    }, []);

    const InnerComp = () => {
        return <h1>InnerComponent</h1>
    }

    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={() => handleButton()}>click me</button>

            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>You clicked {count} times</p>
            <InnerComp />
            {InnerComp()}

        </>
    )
}

export default Practice;