import React, { useState } from 'react';
import Items from './Items.js'

function ListItems({label, options, setFunction,selectedValue}) {
    // console.log("from list item" ,label, options)
    const [text, setText] = useState(selectedValue)

    function handleChange(event) {
        console.log("I was changed")
        console.log(event.target.value,"clicked value?!!")

        setFunction(event.target.value)
    };

    const items = options 
    console.log(items,"from list items")
   
   
    return (
        <div >
            <div id="textToSynth">
                <form>
                    <label> {label}
                        <select value={selectedValue} onChange={(e) => { handleChange(e) }}>
                           {items.map((item, index) => (
                            item.length > 0
                            ?(<Items key={item+index} item={item} setFunction={setFunction} />)
                            :null
                           ))}
                        </select>
                        <br></br>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default ListItems;
