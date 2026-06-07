import React from 'react'

const demoFeatures = [
  {
    title: 'Reusable UI blocks',
    description:
      'Build fast interfaces using reusable React components and shared Sass styling.',
  },
  {
    title: 'Responsive layout',
    description:
      'Designed for desktop, tablet, and mobile with a fluid grid and smart spacing.',
  },
  {
    title: 'Interactive controls',
    description:
      'This demo page can evolve into an interactive playground for future features.',
  },
]

const DemoFeatureSection = () => {
  return (
    <section className="demo-feature-section">
      <div className="container demo-feature-card">
        <div className="demo-feature-intro">
          <span className="demo-feature-kicker">Live demo</span>
          <h2 className="demo-feature-title">What this demo shows</h2>
          <p className="demo-feature-copy">
            Explore the project capabilities through reusable design patterns, responsive layout, and interactive product previews.
          </p>
        </div>

        <div className="demo-feature-grid">
          {demoFeatures.map((feature) => (
            <article className="demo-feature-tile" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DemoFeatureSection
