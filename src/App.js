
import './App.css';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor= '#082949'
      showAlert("Dark Mode is Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("Light Mode is Enabled", "success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
         
          <Route exact path="/">
          
            <TextForm showAlert={showAlert} title="Enter your text to analyze" mode={mode}/>
            <Contact mode={mode} showAlert={showAlert}/>
          
          </Route>
    </Switch>
    
    
   
    </div>
    </Router>
    </>
  );
}

export default App;
