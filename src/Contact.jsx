import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_puc7xjf', 'template_riga88f', form.current, {
        publicKey: 'Xnb5xJRBc1HLp1_Wv',
      })
      .then(
        () => {
          alert("Message Send Successfully")
          console.log('SUCCESS!');
        },
        (error) => {
            alert("Failed..Send Again")
          console.log('FAILED...', error.text);
        },
      );
  };
    return(
        <section className="contact section" id="contact">

        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
            <form  className="contact__form" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name='from_name' className="contact__input"/>
                <input type="mail" placeholder="Email" name='from_email' className="contact__input"/>
                <input type="text" inputMode='numeric' placeholder="Phone" name='from_mobile' className="contact__input"/>
                <textarea name="" id="" cols="0" rows="10" className="contact__input" placeholder="Message"></textarea>
                <input type="submit" value="Submit Message" className="contact__button button"/>
            </form>

            <div className="contact-details-container">
            <div className="contact-details">
                <div className="icon">
                    <i className='bx bx-current-location'></i>
                </div>
                <div className="detail">
                    <span>Address</span>
                    <p>Chennai, Tamilnadu, India</p>
                </div>
            </div>

            <div className="contact-details">
                <div className="icon">
                    <i className='bx bxs-envelope'></i>
                </div>
                <div className="detail">
                    <span>Email</span>
                    <p>
                        <a href="mailto:psprasanna2004@gmail.com">psprasanna2004@gmail.com</a>
                    </p>
                </div>
            </div>

            <div className="contact-details">
                <div className="icon">
                    <i className='bx bxs-phone'></i>
                </div>
                <div className="detail">
                    <span>Phone</span>
                    <p>+91 8110057261</p>
                </div>
            </div>
        </div>
        </div>
        
    </section>
    )
}

export default Contact;



 