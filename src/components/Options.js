import React, { useState, useEffect } from 'react';
import ListVoices from './ListVoices.js'
import ListLanguages from './ListLanguages'
function Options({ voice, data, setVoice }) {
    const [language, setLanguage] = useState("US English")
    const [voiceArr, setVoiceArr] = useState([]);
    const [languageArr, setLanguageArr] = useState([]);

    const sortVoices = (data, selectedLanguage) => {

        if (data === null) {
            return
        }
        let filteredVoices = []
        let languageHash = {}
        let languageArr = []
        data.forEach((voice) => {
            if (!languageHash[voice.LanguageName]) {
                languageHash[voice.LanguageName] = true;
                languageArr.push([voice.LanguageName, voice.LanguageCode]);
            }
            if (voice.LanguageName === selectedLanguage)
                filteredVoices.push([voice.Name, voice.Gender]);
        })
        console.log(languageArr, "my hash")
        // setLanguageList()
        setVoiceArr(filteredVoices)
        setLanguageArr(languageArr)
        console.log(languageArr, "languge list")
    }
    const triggerSort = () => {
        console.log('sort Triggered', language, data)

        sortVoices(data, language)
    }
    useEffect(() => {
        triggerSort()
    },[language])
    // need to trigger a language update in state. will not chage from US ENGLISH  voices change. Flollow that pattern? 
    return (
        <div className="options">
            <ListVoices label={"Chosse a voice"} options={voiceArr} setFunction={setVoice} selectedValue={voice} />
            <ListLanguages label={"choose a language"} options={languageArr} setFunction={setLanguage} selectedValue={language} />
        </div>
    );
}

export default Options;
