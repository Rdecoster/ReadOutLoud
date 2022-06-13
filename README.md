# Read Out Loud Chrome Extension. 

This is a simple Text To Speach aplication design to be a chrome extension. 
This aplication uses amazon Polly TTS engine to generate the voice for your speach. 
You will need to have your own AWS account to generate a identity key. 


## Loading This APP as a Chrome Extension.
You will meed.
The manifest.json 
root>public>manifest.json

The manifest.json give chrome the instructions on how to read the aplication. 
You can read more here at the chrome developer documents https://developer.chrome.com/docs/extensions/mv3/getstarted/

To load you aplication into chrome.
1. Run npm run build.
2. From chrome click extension icon.
3. Navigate to the extension management page.
4. Click the load unpacked
5. Navagate to the directoy where you aplication built the aplication you manifiest.json file should be in here. 
6. Press the select button. 
7. The aplication will now appear as an aplication in your chrome extension tab and can run. 


## Getting Started with amazon polly 
Follow the instructions here on AWS 
https://docs.aws.amazon.com/polly/latest/dg/getting-started.html

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

