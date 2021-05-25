import React from 'react';

const IdCard = (props) => {
        const dateFormatted = props.birth.toDateString();
        return(
            <div>
                <img className='' src={props.picture}/> <br />
                <strong>Last name:</strong> {props.lastName} <br />
                <strong>First name:</strong> {props.firstName} <br />
                <strong>Gender:</strong> {props.gender} <br />
                <strong>Height:</strong> {props.height} <br />
                <strong>Birth:</strong> {dateFormatted} <br />
            </div>
        )
}

export default IdCard;