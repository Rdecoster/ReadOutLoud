
import './App.css';

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import ReactAudioPlayer from 'react-audio-player';
import Options from "./components/Options.js"
import TextInut from "./components/Textnput.js"
import React, { useState, useEffect } from 'react';


function App() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState(null)
  const [voice, setVoice] = useState("Matthew")

  
  const sampleVoices = [{ 
    Id: "Matthew",
    LanguageName: "US English",
    LanguageCode: "en-US",
    Gender: "Male",
    Name: "Matthew"
  },
  { 
    Id: "Ryan",
    LanguageName: "US Flemish",
    LanguageCode: "Flan",
    Gender: "Male",
    Name: "Ryan"
  }
]



  function handleChange(event) {

    setText(event.target.value);
  };
  const client = new Polly({
    region: "us-west-2",
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({ region: "us-west-1" }),
      identityPoolId: "us-west-1:a7a7df4c-0fc3-4148-9981-80939b6e6184" // IDENTITY_POOL_ID
    }),
  });

  // Set the parameters
  const speechParams = {
    OutputFormat: "mp3", // For example, 'mp3'
    SampleRate: "24000", // For example, '16000
    engine: 'standard', // standard or neural
    Text: "", // The 'speakText' function supplies this value
    TextType: "text", // For example, "text"
    VoiceId: "Matthew",
    SpeachMarkTypes: "word" // For example, "Matthew"
  }
  
  const speakText = async (event)=> {
    // Update the Text parameter with the text entered by the user
    event.preventDefault();

    console.log('run speach')
    speechParams.Text = text
    try {
      let url = await getSynthesizeSpeechUrl({
        client, params: speechParams
      });
      console.log(url, "url for de shit ");
      // Load the URL of the voice recording into the browser
      // document.getElementById('audioSource').src = url;
      setUrl(url)
      // document.getElementById('audioPlayback').load();
      // document.getElementById('result').innerHTML = "Speech ready to play.";
    } catch (err) {
      console.log("Error catch error !!!!!!!", err);
      document.getElementById('result').innerHTML = err;
    }
  };

  const hasVoices =  data 
  
 useEffect(()=>{

   (async () => {
    try {
      let data = await client.describeVoices("en-US")
      console.log(data.Voices, "from app")
      const voiceData = data.Voices
      setData(voiceData)
    }
      catch (err) {
        console.log(err)
      }
    })()

    },[])

  return (
    <div className="App">

      <div>
        my react component worked

        <div id="textToSynth">

          <form onSubmit={speakText}>
            <label>
              Type To synthize:
              <input type="text" name="name" default="enter text here" value={text} onChange={(e) => { handleChange(e) }} />
            </label>
            <input type="submit" value="Submit" className="btn default" />
          </form>
        </div>
        < ReactAudioPlayer id="audioPlayback" controls src={url} />
      </div>
      <div>
        {hasVoices
        ? <Options  voice={voice} data={data} setVoice={setVoice} />
        : <div>Loading Voices</div>
        }
       
        <TextInut />
      </div>
    </div>
  );
}

export default App;
