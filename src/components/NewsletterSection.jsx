import React, { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setFeedback('Please enter a valid email address.')
      return
    }

    setFeedback('Thank you for subscribing!')
    setEmail('')
    setTimeout(() => setFeedback(''), 4000)
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-copy">
            <span className="newsletter-kicker">Stay connected</span>
            <h2 className="newsletter-title">Join our newsletter</h2>
            <p className="newsletter-description">
              Subscribe for updates, deals, and product news delivered directly to your inbox.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="newsletter-label" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="newsletter-input-group">
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary newsletter-button">
                Subscribe
              </button>
            </div>
            {feedback && <p className="newsletter-feedback">{feedback}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
