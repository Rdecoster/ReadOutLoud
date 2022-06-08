import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  fromCognitoIdentityPool,
} from "@aws-sdk/credential-provider-cognito-identity";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import React, { useState } from 'react';


function TextInput() {
    const [url, setUrl] = useState("");
    const [text, setText] = useState("")
  
  
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
    async function speakText(event) {
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
    }
  
    return (
      <div className="TextInput">
          <div id="textToSynth">
            <form onSubmit={speakText}>
              <label>
                Type To synthize:
                <input type="text" name="name" default="enter text here" value={text} onChange={(e) => { handleChange(e) }} />
              </label>
              <input type="submit" value="Submit" className="btn default" />
            </form>
          </div>
      </div>
    );
  }
  
  export default TextInput;
  