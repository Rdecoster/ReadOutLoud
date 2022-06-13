/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prop-types
function TextInput({ setText, text, speackText }) {
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="TextInput">
      <div id="textToSynth">
        <form onSubmit={speackText}>
          <textarea cols="50" rows="10" name="name" placeholder="enter text here" value={text} onChange={(e) => { handleChange(e); }} />
          <br />
          <input type="submit" value="Submit" className="btnDefault" />
        </form>
      </div>
    </div>
  );
}

export default TextInput;
