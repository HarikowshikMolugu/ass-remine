import React from "react";
import Contactus from './contactus';
import location from "./location.png";
import  { useState, useEffect, useRef } from 'react';
import 'animate.css';


function About(){
    const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const target1 = useRef();
  const target2 = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
        } else {
          setIsVisible1(false);
        }
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        } else {
          setIsVisible2(false);
        }
      },
      { threshold: 0.1 }
    );

    observer1.observe(target1.current);
    observer2.observe(target2.current);

    return () => {
      observer1.unobserve(target1.current);
      observer2.unobserve(target2.current);
    };
  }, []);

  const onAnimationEnd = () => {
    setIsVisible1(false);
    setIsVisible2(false);
  };
      
    return(
        <div >
          <div >
            <p id="main-name">REMINE PRIVATE LIMITED</p>
        <ul class="topnav" type="none">
       
        
        <li><a href="#contact-out">Meet us</a></li>
        <li><a href="#footer">Contact us</a></li>
        <li><a href="#about-out">About us</a></li>
        <li><a id="active" href="/">Home</a></li>
        </ul>
        </div>
        {/* <div className="head" >
        <p align="center" >About   <b>Remine India Private Limited</b></p>
        </div> */}
        
        <div id="about-out">
            <div id="about-content">
            <div id="about-content1">
        <p id="about-content1-1"><b>Some words about us</b></p>
        <p id="about-content1-2"><b>Remine India Private Limited</b> is a Private incorporated on 06 December 2022. It is classified as Non-govt company and is registered at Registrar of Companies, Uttarakhand. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 1,000,000. It is inolved in Recycling of metal waste and scrap [from rejected aluminum, utensil, containers and other used metallic items etc. Collection of metal waste and scrap for and other used metallic items etc. Collection of metal waste and scrap for recycling.</p>
        </div>
        <div id="about-content2">
            <fieldset id="fs1">
                <legend><p id="about-content2-1"><b>We are proud to work with</b></p></legend>
            </fieldset>

        </div>
            </div>
       
        </div>
        <div className="lines1">
            <div id="line1">
            <p id="main-line1" align="center">Digital expertise for Business growth</p>
            <p id="sub-line1" align="center">Your one-stop international brand management, design and consultancy agency</p>
            </div>
            
        </div>
        <div id="content2-out" ref={target1} className={`animate__animated ${isVisible1 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd} >
            <div id="content2-content">
            <div id="content2-content1">
                <p id="content2-content1-1"><b>WHY REMINE</b><br></br><br></br>
                We pride ourselves on the quality and affordability of our work, as such our applications are feature rich and competitively priced, giving you the best in both cost and quality. Our projects are run at fixed prices for complete security and peace of mind.
                </p>
                <div id="content2-content1-2">
                    <div id="content2-content1-2-1">
                        <p>Complimentary consultation</p>
                        <p>Unbiased advisory services</p>
                        <p>Unlimited design samples</p>
                    </div>
                    <div id="content2-content1-2-2">
                        
                        <p>Experienced working within various sectors/industries</p>
                        <p>An national portfolio</p>
                        <p>User friendly</p>
                    </div>
                </div>
            </div>
            <div id="content2-content2">
            <div class="container">
  <img src="/images/img1.jpeg"  class="image1"></img>
  <div class="overlay1">
    <div class="text">REUSE</div>
  </div>
</div>
              <div class="container">
  <img src="/images/img2.jpeg"  class="image2"></img>
  <div class="overlay2">
    <div class="text">RECYCLE</div>
  </div>
</div>
<div class="container">
  <img src="/images/img3.jpeg"  class="image3"></img>
  <div class="overlay3">
    <div class="text">REPRODUCE</div>
  </div>
</div>
            </div>
            </div>
            

        </div>
        <div className="lines2">
            <div id="line2">
            <p id="main-line2" align="center">QUALITY ASSURANCE</p>
        <p id="sub-line2-1" align="center">With a commitment to quality, an in depth knowledge of interactive best practices and a
        structured proven process – our company delivers excellence time and time again.</p>
            </div>
        
        </div>
        <div>
        <Contactus></Contactus>
        </div>
        <div id="map-det" ref={target2} className={`animate__animated ${isVisible2 ? 'animate__zoomIn' : ''}`} onAnimationEnd={onAnimationEnd}>
        
          
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27936.485490829444!2d79.68340851960478!3d28.926248482324787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0672c919ba6fb%3A0x5a36632545688dc4!2sSitarganj%2C%20Uttarakhand%20262405!5e0!3m2!1sen!2sin!4v1682847538949!5m2!1sen!2sin"
           
           
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        
            
        
        <div id="map-content">
          <div id="map-content-1">Meet us at</div>
          <div id="map-content-2">
            <div><img src={location} alt="logo" id="icon"></img></div>
            <div id="address-block"><p id="address">WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ Udham Singh Nagar UR 262405 IN</p></div>

          </div>
         
        </div>
        </div>
        <div id="bottom-name"><p align="center"><b>Remine India Private Limited</b></p></div>
       
    </div>
        
    
    )   
}
export default About;