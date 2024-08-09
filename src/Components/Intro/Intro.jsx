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
          <a href="https://www.facebook.com/ohmmy.yarasai.9/" target='blank' className='icon'>
            <i className='fi fi-brands-facebook'></i>
          </a>
          <a href="https://github.com/ohmarsy/MyPortfolio" target='blank' className='icon'>
            <i className='fi fi-brands-github'></i>
          </a>
          <a href=" " target='blank' className='icon'>
            <i className='fi fi-brands-instagram'></i>
          </a>
          <a href="" target='blank' className='icon'>
            <i className='fi fi-brands-linkedin'></i>
          </a>
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
        <p style={{ fontSize: '0.8rem', color: '#00000080' }}>slide down</p>
        <i className="icon slide-down-icon fi fi-rs-angle-double-small-down"></i>
      </section>
    </div>
  )
}

export default Intro