import React, { useRef, useEffect, useState } from 'react';

const Usereff = () => {
    const user = useRef();
    const [text, setText] = useState('');

    useEffect(() => {
        if (user.current) {
            user.current.style.backgroundColor = 'red';
            user.current.style.color = 'white';
        }
    }, []);

    const handleinput = (event) => {
        event.preventDefault();
        setText(user.current.value);
    }

    return (
        <div>
            <h1>UseRef Example</h1>
            <p>useRef ka use hota hai input fields ya kisi bhi DOM element ko directly access karne ke liye.</p>
            <form onSubmit={handleinput}>
                <input type="text" ref={user} />
                <input type="submit" />
            </form>
            {text && <h2>{text}</h2>}
        </div>
    );
}

export default Usereff;
