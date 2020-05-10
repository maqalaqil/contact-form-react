import React from 'react'

const ContactForm = () => (
  <form className="contact-form" method="POST" action="/contact">
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Full name</div>
        <input type="text" name="name" placeholder="Enter your name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email</div>
        <input type="email" name="email" placeholder="Enter your email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="phone">
        <div className="label-content">Phone Number</div>
        <input type="text" name="phone"   placeholder="Enter your Phone Number" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message</div>
        <textarea className="stretch" name="message" cols="30" rows="10"  placeholder="Enter your message" required />
      </label>
    </div>

    <button type="submit">SUBMIT</button>

    <div>
      { window.location.hash === '#success' &&
        <div id="success">
          <p>Your message has been sent!</p>
        </div>
      }
      { window.location.hash === '#error' &&
        <div id="error">
          <p>An error occured while submitting the form.</p>
        </div>
      }
    </div>
  </form>
)

export default ContactForm
