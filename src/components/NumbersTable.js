import React from 'react';

function NumbersTable(props) {
    let list = Array.from({length: props.limit }, (_, i) => {
        const divStyle = {
            backgroundColor: i % 2 ? 'red' : 'white',
        };
        return(
            <li key={'li' + i} style={divStyle}>
                {i + 1}
            </li>
        );
    });
    return <ul>{list}</ul>
}

export default NumbersTable