import React, { useState } from 'react';
import Car from './components/Car';
import User from './components/User';

const App = () => {
    // async function a() {
    //     const data = await fetch("http://localhost:8888/api/user", {
    //         method: "GET"
    //     }).then(res => {
    //         return res.json()
    //     })
    //     console.log(data.data);
    //     return data
    // }
    // a()
    const [key, setKey] = useState('')

    async function handlerClick(i) {
        setKey(await i)
    }
    // console.log(key);
    return (
        <div className='app-container'>
            <User getId={handlerClick} />
            <Car id={key} />
        </div>
    );
}

export default App;
