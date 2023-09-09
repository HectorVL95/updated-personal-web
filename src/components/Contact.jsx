import React from 'react'
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <main className='Contact'>
      <form action="https://formsubmit.co/francisco1495@gmail.com" method='POST'>
        <input type="text" name='name' placeholder='Name'/>
        <input type="email" name='email' required placeholder='example@email.com'/>
        <input type="text" name='message' required/>
        <input type="numbers" name='phone'/>
        <button type='submit'>Send</button>
      </form>
    </main>
  );
}

export default Contact;