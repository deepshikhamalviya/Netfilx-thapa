import React from 'react'

const Miniproject = () => {
    let currDate= new Date(2020,6,15,13);
    currDate = currDate.getHours();
    let greeting = "";
    const  cssStyle ={};

    if(currDate>=1 && currDate<12){
        greeting="Good Morning";
        cssStyle.color ="green"
    }else if(currDate>=12 && currDate<19){
        greeting="Good AfterNoon";
        cssStyle.color="red";
    }else{
        greeting="Good night";
        cssStyle.color="blue";
    }
    

    
  return (
    <>
    <div className='cont'>
      <h1 className='headingStyle'>Hello Deepshikha, <span style={cssStyle} > {greeting} </span></h1>
    </div>
    </>
  )
}

export default Miniproject
