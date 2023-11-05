import React from 'react'
import Type from "react-typed";

import './Intro.css'
import myImage from '../../assets/myImage.jpg'



const Intro = () => {
  return (
      <div className='container'>
        <section className="post-card">
          <img src={myImage} alt="my-image" className='my-image' />
          <div className="advice-con">
            <i className='icon fi fi-brands-facebook'></i>
            <i className='icon fi fi-brands-github'></i>
            <i className='icon fi fi-brands-instagram'></i>
            <i className='icon fi fi-brands-linkedin'></i>
          </div>
        <Type
          className="text"
          strings={[
            `&lt;/Suphachai Yarasai&gt;`
          ]}
          typeSpeed={50}
          backSpeed={100}
          loop
        />
        </section>
        <section className='slide-down'>
          <p style={{fontSize: '0.8rem', color: '#00000080'}}>slide down</p>
          <i className="icon slide-down-icon fi fi-rs-angle-double-small-down"></i>
        </section>
      </div>
  )
}

export default Intro