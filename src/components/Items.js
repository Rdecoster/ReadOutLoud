import React, { useState } from 'react';


function Items({item}) {
  


    return (

        <option className="options" value={item[0]} >
            {item[0] + " " + item[1]}
            {' '}
        </option>

    );
}

export default Items;
