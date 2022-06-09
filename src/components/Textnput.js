import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
    fromCognitoIdentityPool,
} from "@aws-sdk/credential-provider-cognito-identity";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";
import React, { useState } from 'react';


function TextInput() {

    const [text, setText] = useState("")

    function handleChange(event) {
        setText(event.target.value);
    };
    return (
        <div className="TextInput">
            <div id="textToSynth">
                <form >
                    <label>
                        Type To synthize:
                        <textarea cols="50" rows="10" name="name" default="enter text here" value={text} onChange={(e) => { handleChange(e) }} />
                    </label>
                    <input type="submit" value="Submit" className="btn default" />
                </form>
            </div>
        </div>
    );
}

export default TextInput;
