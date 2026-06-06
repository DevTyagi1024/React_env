import Banner from '../components/Banner'

const AboutPage = () => {
  return (
    <div>
       <Banner
        kicker="About Us"
        title="Our Story"
        description="We are a team of passionate developers dedicated to building high-quality web applications using React. Our mission is to create user-friendly and efficient solutions that empower businesses and individuals alike."
        primaryButtonLink="/about"
        primaryButtonText="Learn More"
        secondaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
      />
    </div>
  )
}

export default AboutPage
