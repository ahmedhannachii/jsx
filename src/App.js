import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <>
  <div style={{border:'solid 1px black', maxWidth:"100vw" }}>  
 
    <h1 className="title red">Your name here</h1>  

    <br/>  
        <img src={logo} alt="" /> 
    <br/> 

        <img src="/react.png" alt="" style={{width:150 , height:150}}/>  

  </div>  

  <video width="320" height="240" controls>  

      <source src="https://www.youtube.com/watch?v=SFAmD-UPQT4" type='video/mp4'/> 

  </video> 
  </>
  );
}

export default App;
