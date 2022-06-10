import React, { useState } from 'react';
import Items from './Items.js'

function ListItems({label, options, setFunction}) {
    // console.log("from list item" ,label, options)
    const [text, setText] = useState("")

    function handleChange(event) {
        console.log("I was clicked")
        // const items = props.list
     
   
    };

    const items = options 

    const ListItems = items.map((item, index) => <Items key={item+index} item={item} setFunction={setFunction} />);
    return (
        <div >
            <div id="textToSynth">
                <form onChange>
                    <label> {label}
                        <select name="default">
                           {ListItems}
                        </select>
                        <br></br>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default ListItems;
