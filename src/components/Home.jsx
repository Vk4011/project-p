import img from './d.png'
import v from './vikram.png'
import React from 'react'

import d from './d.png'
import ds from './ds.png'
import dv from './dv.png'
import apd from './apd.png'
import css from './css-3.png'
import html from './html-5.png'
import js from './js.png'
import java from './java.png'
import github from './github.png'

function Home() {

  return (
    <>
     <section className="home" id="home">
  <div className="home-content">
    <h3>HELLO , It's Me </h3>
    <h1>Vikram Ram</h1>
    <h3>And I'm a <span className="multiple-text" /></h3>
    <p>I believe that web development is indeed an important and 
      growing field with a lot of potential for the future.</p>
    <a><button>Download CV
</button></a>

  </div>
  <div className="">
    <div className="">
      <div className="profession" style={{'-i': 0}}><i className="bx bx-code-alt" />
        {/* <h3>Web Devloper</h3> */}
      </div>
      <div className="circle" />
    </div>
    
    <div className="overlay">
      
    </div>
    <div className="home-img">
      {/* <img src={img} alt /> */}
    </div>        
  </div>
  </section>

  <section className="about" id="about">
  <div className="about-img">
    <img src={v} alt />
  </div>
  <div className="about-content">
    <h2 className="heading">About <span>Me</span></h2>
    <h3>Frontend Developer</h3>
    <p>Frontend development is a key aspect of building modern websites and web applications. Frontend developers are responsible for creating the user-facing parts of a website or application, including the layout, design, and interactivity. They work with HTML, CSS, and JavaScript to build the visual and interactive components of a
      website or application.</p>
    <a href="#" className="btn">Read More</a>
  </div>
</section>
<section class="skills" id="skills">
    <h2 class="heading"><span>Skills</span></h2>
    <div class="skills-container">
        <div class="skills-box">
          <img src={github} alt="" />
            
            <a href="#" class="btn"><h3>GitHub</h3></a>
        </div>
        <div class="skills-box">
            <img src={html} alt="HTML Icon"/>
            <a href="#" class="btn"> <h3>HTML</h3></a>
        </div>
        <div class="skills-box">
            <img src={css} alt="CSS Icon"/>
            <a href="#" class="btn"> <h3>CSS</h3></a>
        </div>
        <div class="skills-box">
            <img src={js} alt="JavaScript Icon"/>
            <a href="#" class="btn"><h3>JavaScript</h3></a>
        </div>
        <div class="skills-box">
            <img src={java} alt="Java Icon"/>
            <a href="#" class="btn"><h3>Java</h3></a>
        </div>
      
       
    </div>
</section>

    <section className="portfolio" id="portfolio">
  <h2 className="heading">Latest  <span>Project</span></h2>
  <div className="portfolio-container">
    <div className="portfolio-container">
      <div className="portfolio-box">
        <img className='portfolio-box-img' src={apd} alt />
        <div className="portfolio-layer" />
        <h4>Web Design</h4>
        <p>
          Three.js is a JavaScript library that makes it easier to create 3D graphics and animations in web browsers. It provides a wide range of tools and features that can be used to create complex 3D scenes, games,
          simulations, and visualizations.
        </p>
        <a href="#"><i className="bx bx-link-external" /></a>
      </div>
    </div>
  </div>
</section>




  
    </>
  )
}

export default Home