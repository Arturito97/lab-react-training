import React from 'react';

const Greetings = (props) => {
    const greetingsLang = {de:'Hallo', fr:'Bonjour'};
    const greeting = greetingsLang[props.lang];
    return (
        <div>
            {greeting} {props.children}
        </div>
    )
}

export default Greetings