import React, { useState } from 'react';


function Items(props) {

    const [text, setText] = useState("")

    function handleChange(event) {
        console.log("I was clicked")
    };

    console.log("props from items of")

    return (

        <option className="options" value="1401644161">
            Testing
            {' '}
        </option>

    );
}

export default Items;
