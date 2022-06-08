import React, { useState } from 'react';


function TextInput() {

    const [text, setText] = useState("")

    function handleChange(event) {
        console.log("I was clicked")
    };
    return (
        <div className="options">
            <div id="textToSynth">
                <form>
                    <label> choose a voice
                        <select name="default">
                            <option value="testname">test name</option>
                        </select>
                        <br></br>

                    </label>
                </form>
            </div>
        </div>
    );
}

export default TextInput;
