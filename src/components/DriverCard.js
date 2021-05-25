import React from 'react';

const DriverCard = (props) => {
    return (
        <div>
            <strong>{props.name}</strong> <br />
            <strong>{props.rating}</strong> <br />
            <img src={props.img} alt={props.name}/> <br />
            <strong>{props.car.model} - {props.car.licensePlate}</strong> <br />
        </div>
    )
};

export default DriverCard;