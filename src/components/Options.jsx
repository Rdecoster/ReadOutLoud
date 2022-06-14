/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

function Options({
  voice, data, setVoice, setEngine, engine,
}) {
  const [language, setLanguage] = useState('US English');
  const [voiceArr, setVoiceArr] = useState([]);
  const [languageArr, setLanguageArr] = useState([]);
  const voiceEngineArr = [['standard'], ['neural']];
  const sortVoices = (dataInput, selectedLanguage, selectedEngine) => {
    if (dataInput === null) {
      return;
    }
    const filteredVoices = [];
    const languageHash = {};
    const langArr = [];
    dataInput.forEach((voiceItem) => {
      if (!languageHash[voiceItem.LanguageName]) {
        languageHash[voiceItem.LanguageName] = true;
        langArr.push([voiceItem.LanguageName, voiceItem.LanguageCode]);
      }
      if (voiceItem.LanguageName === selectedLanguage && voiceItem.SupportedEngines.includes(engine)) {
        filteredVoices.push([voiceItem.Name, voiceItem.Gender, voiceItem.SupportedEngines]);
      }
    });
    // setLanguageList()
    setVoiceArr(filteredVoices);
    setLanguageArr(langArr);
  };
  const triggerSort = () => {
    sortVoices(data, language, engine);
  };
  useEffect(() => {
    triggerSort();
  }, [language, engine]);
  return (
    <div className="options">
      <ListItem label="Voice Engine" options={voiceEngineArr} setFunction={setEngine} selectedValue={engine} />
      <ListItem label="Chosse a voice" options={voiceArr} setFunction={setVoice} selectedValue={voice} />
      <ListItem label="choose a language" options={languageArr} setFunction={setLanguage} selectedValue={language} />
    </div>
  );
}

export default Options;
