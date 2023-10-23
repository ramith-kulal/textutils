import React, { useRef, useState } from 'react';

const YourComponent = (props) => {
  const textRef = useRef(null);
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newe = text.toUpperCase();
    setText(newe);

  };

  const handleLowClick = () => {
    let newe = text.toLowerCase();
    setText(newe);
   
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = (props) => {
    setText('');

  };

  const handleCopy = () => {
    textRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
   
  };

  return (
    <>
    
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea onChange={handleOnChange}style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
       

          className="form-control"
          value={text}
      
          ref={textRef}
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter Your Text"
        ></textarea>
         
        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2 " onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} type="submit">
          Copy Text
        </button>
      </div>

      <div className="container">
  <h3>Your Text Summary</h3>
  <p>
    {text.length === 0 ? '0 words and 0 characters' : `${text.split(' ').length} words and ${text.length} characters`}
  </p>
  <p>
    <b>{(0.008 * text.split(' ').length)} </b>minutes of read
  </p>
  <h4>Text Preview :</h4>
  <p>{text}</p>
</div>

    </>
  );
};

export default YourComponent;
