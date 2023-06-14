import React from 'react'
// #13 thapa
const Image = () => {
    const img1 = "https://picsum.photos/200/300";
    const img22 ="https://picsum.photos/250/300";
    const img33 = "https://picsum.photos/300/300";
    const link = "https://www.thapatechnical.com/";
  return (
    <div>
    <h1  className = "heading" contentEditable="true">My Name is Deepshikha</h1>
     
      <div className='img-div'>
      <img src={img1} alt = "randomImages"/>
      <img src={img22} alt = "randomImages"/>
      <a href={link} target ="_blank">
      <img src={img33} alt = "randomImages"/>
      </a>
      </div>
{/* image per click karne per thapatechnical ka page oapn hoga */}
    </div>
  )
}

export default Image;
