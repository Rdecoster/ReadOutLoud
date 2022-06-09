import React, { useState } from 'react';
import ListItems from './ListItems.js'

function TextInput({ voices, language, setLanguage, setVoice }) {
    console.log(voices, "voices", language, "lanugages")
    const [languageList, setLanguageList] = useState([])
    const [voiceList, setVoiceList] = useState([])

    const handleChange = (event) => {
        console.log("I was clicked")
    };
    const sortVoices = (language) => (voices) => {
        let filteredVoices = []
        let languageHash = {}
        voices.forEach((voice) => {
            if (!languageHash[voice.languageCode]) {
                languageHash[voice.languageCode] = [voice.languageCode, voice.LanguageName]
            }
            if (voice.LanguageName = language)
                filteredVoices.push(voice)
        })
        setLanguageList(languageHash.values())
        setVoiceList(filteredVoices)
    }
    return (
        <div className="options">
            <ListItems label={"Chosse a voice"} options={languageList} />
            <ListItems label={"choose a language"} options={voiceList} />
        </div>
    );
}

export default TextInput;
