import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedback('Please complete all fields before sending your message.')
      return
    }

    setFeedback('Thank you! Your message has been received.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setFeedback(''), 6000)
  }

  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-form-panel">
          <span className="contact-kicker">Contact form</span>
          <h2 className="contact-title">Send us a message</h2>
          <p className="contact-copy">
            Fill out the form and our team will get back to you soon. In the future,
            this submission flow will be powered by a backend API.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name required"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email required"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject required"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message required"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="contact-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send message
            </button>
            {feedback && <p className="contact-feedback">{feedback}</p>}
          </form>
        </div>

        <aside className="contact-info-panel">
          <span className="contact-kicker">Other ways to reach us</span>
          <h3 className="contact-info-title">Address & communication</h3>
          <p className="contact-info-copy">
            Prefer to reach us directly? Use the details below or send a quick form message and we will respond as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-details__block">
              <h4>Office</h4>
              <p>123 React Lane<br />Suite 400<br />Web City, CA 90210</p>
            </div>
            <div className="contact-details__block">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-details__block">
              <h4>Email</h4>
              <p>support@reactenv.example</p>
            </div>
            <div className="contact-details__block">
              <h4>Hours</h4>
              <p>Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ContactSection
