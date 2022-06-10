import React, { useState, useEffect } from 'react';
import ListItems from './ListItems.js'

function TextInput({ voices, languageArr, setLanguage, setVoice }) {



    const handleChange = (event) => {
        console.log("I was clicked")
    };
 


    return (
        <div className="options">
            <ListItems label={"Chosse a voice"} options={languageArr} defaultSelect={""} setFunction={setVoice}/>
            <ListItems label={"choose a language"} options={voices} defaultSelect={"US English"} setFunction={setLanguage}/> 
        </div>
    );
}

export default TextInput;
