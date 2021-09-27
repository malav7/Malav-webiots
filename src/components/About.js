import React from "react";

export default function About(props) {
    
  return (
      <>
    <div classNameName="container" >
      <h3 style={{color: props.mode === 'dark'?'white':'black' }}>This website is developed by the Malav Fultariya</h3>
    </div>
   
    </>
  );
}
