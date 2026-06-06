import Banner from '../components/Banner'
import ProductCardListing from '../components/ProductCardListing'

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
      <ProductCardListing />
    </div>
  )
}

export default ProductListingPage
