import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner
        kicker="React Environment"
        title="Build faster with a clean, responsive foundation."
        description="A flexible starter layout with shared Sass tokens, reusable structure, and polished visual spacing ready for future components."
        primaryButtonLink="/products"
        primaryButtonText="Explore Products"
        secondaryButtonLink="/demo"
        secondaryButtonText="Try Demo"
      />
    </div>
  )
}

export default HomePage
