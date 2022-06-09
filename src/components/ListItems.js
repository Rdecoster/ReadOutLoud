import React, { useState } from 'react';
import Items from './Items.js'

function ListItems({label}) {
    console.log("from list item")
    const [text, setText] = useState("")

    function handleChange(event) {
        console.log("I was clicked")
        // const items = props.list
   
    };

    const items = [1,2,3,4,5]
    const ListItems = items.map((item, index) => <Items key={item+index} />);
    return (
        <div >
            <div id="textToSynth">
                <form>
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
