import Banner from '../components/Banner'

const ProductListingPage = () => {
  return (
    <div>
      <Banner
        kicker="Products"
        title="Our Product Listing"
        description="Explore our wide range of high-quality products designed to meet your needs."
        primaryButtonLink="/products"
        primaryButtonText="View Products"
        secondaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
      />
    </div>
  )
}

export default ProductListingPage
