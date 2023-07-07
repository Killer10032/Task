import React, { useState, useEffect } from 'react';
import { getUserApi, getUserByIdApi } from '../api/userApi';

const User = (props) => {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        getUser()
    }, [])
    async function getUser() {
        const result = await getUserApi()
        setUserList(result)
    }
    const list = userList.map((item) => {
        return (
            <div key={item.id}>
                <div className='context'>
                    <p>name : {item.name}</p>
                    <span>age : {item.age}</span>
                    <span>sex : {item.sex ? "male" : "female"}</span>
                </div>
                <button onClick={() => { props.getId(getUserById(item.id)) }} className='user-btn'>click</button>
            </div>
        )
    })

    async function getUserById(id) {
        const result = await getUserByIdApi(id)
        // console.log(result);
        return result.id
    }

    return (
        <div className='user-container'>
            <h1>User</h1>
            {list}
        </div>
    );
}

export default User;
