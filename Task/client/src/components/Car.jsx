import React, { useState, useEffect } from 'react';
import { getCarApi, getCarByUserIdApi } from '../api/carApi';

const Car = (props) => {
    const [carList, setCarList] = useState([])

    useEffect(() => {
        getCarByUserId(props.id)
    }, [props.id])

    useEffect(() => {
        if (!props.id) {
            getCar()
        }
    }, [props.id])

    async function getCarByUserId(id) {
        const result = await getCarByUserIdApi(id)
        setCarList(result)
    }

    async function getCar() {
        const result = await getCarApi()
        setCarList(result)
    }
    const newCarList = carList === null ? [] : carList
    const list = newCarList.length === 0 ? "The customer did not buy a car" : newCarList.map((item) => {
        return (
            <div className='car-list' key={item.id}>
                <div>
                    <p>Name : {item.name}</p>
                    <p>Serial Number : {item.number}</p>
                    <p>Price : {item.price}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='car-container'>
            <h1 onClick={getCar}>Car</h1>
            {list}
        </div>
    );
}

export default Car;
