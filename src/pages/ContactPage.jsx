import Banner from '../components/Banner'
import ContactSection from '../components/ContactSection'

const ContactPage = () => {
  return (
    <div>
      <Banner
        kicker="Contact Us"
        title="Get in Touch"
        description="Have questions or feedback? We'd love to hear from you."
        primaryButtonLink="/contact"
        primaryButtonText="Send Message"
        secondaryButtonLink="/about"
        secondaryButtonText="Learn More"
      />
      <ContactSection />
    </div>
  )
}

export default ContactPage
