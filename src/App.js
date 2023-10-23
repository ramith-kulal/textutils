
import './App.css';
import Navbar from './components/Navbar';
import Box from './components/Box';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#20242e';
      document.body.style.color = 'white';
      showAlert("darkmode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>
{/*    
      <Router> */}
      <Navbar title="TexT Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route exact path="/About"> */}
            {/* <About mode={mode}/>
          </Route> */}

            <div className="container"><Box heading="Enter the Text To Analyze" /></div>
     
        {/* </Switch>



      </Router> */}

    </>
  );
}



export default App;
