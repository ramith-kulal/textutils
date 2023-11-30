import React, { useRef, useState } from 'react';

const YourComponent = (props) => {
  const textRef = useRef(null);
  const [text, setText] = useState('');

  const handleCaseClick = (conversionFunction) => {
    let newe = conversionFunction(text);
    setText(newe);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCopy = () => {
    textRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text copied!');
  };

  const handleSummary = () => {
    return (
      <>
        <h3>Your Text Summary</h3>
        <p>
          {text.length === 0
            ? '0 words and 0 characters'
            : `${text.split(' ').length} words and ${text.length} characters`}
        </p>
        <p>
          <b>{(0.008 * text.split(' ').length).toFixed(2)} </b>minutes of read
        </p>
        <h4>Text Preview :</h4>
        <p>{text}</p>
      </>
    );
  };

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
          className="form-control"
          value={text}
          ref={textRef}
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter Your Text"
        ></textarea>

        <button className="btn btn-primary my-4" onClick={() => handleCaseClick((str) => str.toUpperCase())}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={() => handleCaseClick((str) => str.toLowerCase())}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={() => handleCaseClick((str) => str.replace(/\b\w/g, l => l.toUpperCase()))}>
          Convert to Title Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => handleCaseClick((str) => str.replace(/\w+/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()))}>
          Convert to Pascal Case
        </button>
        <button className="btn btn-primary my-2" onClick={() => handleCaseClick((str) => str.replace(/\s+/g, '_').toLowerCase())}>
          Convert to Snake Case
        </button>
        <button className="btn btn-primary mx-2" onClick={() => handleCaseClick((str) => str.replace(/\s+/g, '-').toLowerCase())}>
          Convert to Kebab Case
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} type="submit">
          Copy Text
        </button>
      </div>

      <div className="container">{handleSummary()}</div>
    </>
  );
};

export default YourComponent;