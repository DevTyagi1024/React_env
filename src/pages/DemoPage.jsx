import Banner from '../components/Banner'
import ProductCardListing from '../components/ProductCardListing'

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
        <ProductCardListing />
    </div>
  )
}

export default DemoPage
