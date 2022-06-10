import React, { useState } from 'react';


function Items({item, setFunction}) {

    const [text, setText] = useState("")

    function handleChange(event) {
    setFunction(event.target.value)
    };

    

    return (

        <option className="options" value={item[0]}  onChange={handleChange}>
            {item[0] + " " + item[1]}
            {' '}
        </option>

    );
}

export default Items;
