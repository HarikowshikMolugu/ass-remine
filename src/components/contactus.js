import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Footer = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ojr2h2f', 'template_f5xyhyf', form.current, 'yHprSMhETa1i2Cte4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <div id="footer" >
           <div className="footer-contents">
           <div id="footer-content">
                <p id="footer-content1"><b>Contact REMINE</b></p>
                <p id="footer-content2">Please feel free to contact us to see how we may be able to help provide IT, Web, Mobile or Graphics designs services to make your business grow.</p>
            </div>
            <div id="footer-form">
                <form action="" autocomplete="on" ref={form} onSubmit={sendEmail}>
                    <fieldset id="fs2">
                        <legend><p id="legend2"><b >Fill the form:</b></p></legend>
            
                       <input type="text"  id="f-name" name="fname" placeholder="Name*" required></input><br></br>
                       <input type="email"  id="f-email" name="femail" placeholder="Email*" required></input><br></br>
                       <input type="tel"  id="f-ph" name="fph" placeholder="Phone number*" required></input><br></br>
                       <input type="textarea" id="f-msg" name="fmsg" placeholder="Message*" required></input><br></br>
                       <input type="submit"  id="f-button" value="Submit"></input>
                    </fieldset>
                </form>      
            </div>  

           </div>
                 
            
        
        </div>
    )
    }
export default Footer;

