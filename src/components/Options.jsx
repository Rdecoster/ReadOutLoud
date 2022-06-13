/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

function Options({ voice, data, setVoice }) {
  const [language, setLanguage] = useState('US English');
  const [voiceArr, setVoiceArr] = useState([]);
  const [languageArr, setLanguageArr] = useState([]);

  const sortVoices = (dataInput, selectedLanguage) => {
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
      if (voiceItem.LanguageName === selectedLanguage) {
        filteredVoices.push([voiceItem.Name, voiceItem.Gender]);
      }
    });
    // setLanguageList()
    setVoiceArr(filteredVoices);
    setLanguageArr(langArr);
  };
  const triggerSort = () => {
    sortVoices(data, language);
  };
  useEffect(() => {
    triggerSort();
  }, [language]);
  return (
    <div className="options">
      <ListItem label="Chosse a voice" options={voiceArr} setFunction={setVoice} selectedValue={voice} />
      <ListItem label="choose a language" options={languageArr} setFunction={setLanguage} selectedValue={language} />
    </div>
  );
}

export default Options;
