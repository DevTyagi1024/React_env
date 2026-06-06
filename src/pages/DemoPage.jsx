import Banner from '../components/Banner'

const DemoPage = () => {
  return (
    <div>
      <Banner
        kicker="Demo"
        title="Interactive Demo"
        description="Experience the power of our React environment with this interactive demo."
        secondaryButtonLink="/demo"
        secondaryButtonText="Explore Products"
        primaryButtonLink="/contact"
        primaryButtonText="Contact Us"
      />
    </div>
  )
}

export default DemoPage
