import React from 'react'
import '../styles/Contact.scss'
import '../styles/styles.module.scss'

const Contact = () => {

  return (
    <main className='Contact'>
      <h1 className='page-title'>Contact</h1>
      <h3 className='page-sub'>How can I help?</h3>
      <div className='wrap-for-msgIcon'>
          <form className='form' action="https://formspree.io/f/mqkvrzdy" method='POST'>
            <div className='name-wrap'>
              <div className='first-name-wrap'>
                <p className='input-title'>First Name</p>
                <input type="text" name='name' required/>
              </div>
              <div>
                <p className='input-title'>Last Name</p>
                <input type="text" name='name' required/>
              </div>
            </div>
            <div className='email-wrap'>
              <p className='input-title'>Email</p>
              <input type="email" name='email' required placeholder='example@email.com'/>
            </div>
            <div className='message-wrap'>
              <p className='input-title'>Message</p>
              <input className='submit-input' type="text" name='message' required/>
            </div>
            <button className='contact-btn-send' type='submit'>Send</button>
          </form>
          <p className='contact-text'>I will do my best to answer all of your inquiries, You can ask whatever you want and rest assured that I will keep everything confidential. this is one of outermost importance aspects in my work ethic. I wish a good day.</p>
        </div>
    </main>
  );
}

export default Contact;