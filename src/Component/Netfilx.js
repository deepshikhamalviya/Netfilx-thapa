import React from 'react'

const Netfilx = () => {
    const nameee = "deep";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      
      <h1>Hello my name is {nameee}</h1>
      <h2>Current date is = {currDate} </h2>
      <h3>Current time is = {currTime}</h3>
    </div>
  )
  }

export default Netfilx
  
