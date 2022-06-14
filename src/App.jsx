/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { Polly } from '@aws-sdk/client-polly';
import { getSynthesizeSpeechUrl } from '@aws-sdk/polly-request-presigner';
import ReactAudioPlayer from 'react-audio-player';
import React, { useState, useEffect } from 'react';
import Options from './components/Options';
import TextInut from './components/TextInput';

function App() {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState(null);
  const [voice, setVoice] = useState('Matthew');
  const [engine, setEngine] = useState('standard');

  const client = new Polly({
    region: 'us-west-2',
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({ region: 'us-west-1' }),
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID, // AWS IDENTITY_POOL_ID
      // identityPoolId: '1111', // AWS IDENTITY_POOL_ID
    }),
  });

  // Set the parameters
  const speechParams = {
    OutputFormat: 'mp3', // For example, 'mp3'
    SampleRate: '24000', // For example, '16000
    engine: 'standard', // standard or neural
    Text: '', // The 'speakText' function supplies this value
    TextType: 'text', // For example, "text"
    VoiceId: voice,
    SpeachMarkTypes: 'word', // For example, "Matthew"
  };

  const speakText = async (event) => {
    // Update the Text parameter with the text entered by the user
    event.preventDefault();

    speechParams.Text = text;
    try {
      const urlAws = await getSynthesizeSpeechUrl({
        client, params: speechParams,
      });
      setUrl(urlAws);
    } catch (err) {
      console.log('Error catch error !!!!!!!', err);
      document.getElementById('result').innerHTML = err;
    }
  };

  const hasVoices = data;

  useEffect(() => {
    (async () => {
      try {
        const dataGet = await client.describeVoices('en-US');
        console.log(dataGet.Voices, 'from app');
        const voiceData = dataGet.Voices;
        setData(voiceData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="App">

      <div>
        <h2>
          Read out loud
        </h2>

        <div id="textToSynth">
          <TextInut setText={setText} text={text} speackText={speakText} />
        </div>
        <ReactAudioPlayer id="audioPlayback" className="AudioPlayer" controls src={url} />
      </div>
      <div>
        {hasVoices
          ? <Options voice={voice} data={data} setVoice={setVoice} engine={engine} setEngine={setEngine} />
          : <div>Loading Voices</div>}

      </div>
    </div>
  );
}

export default App;
