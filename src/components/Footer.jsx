import { Link, NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { menuItems } from '../data/navigation'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-accent" aria-hidden="true"></div>

        <div className="footer-inner">
          <div className="footer-brand">
            <Link
              className="brand footer-logo"
              to="/"
              aria-label="REACT ENV home"
            >
              <span className="brand-mark">
                <img src={reactLogo} alt="" />
              </span>
              <span className="brand-name">REACT_ENV</span>
            </Link>
            <p>
              A modern React starter shaped with reusable Sass tokens,
              responsive structure, and room for future features.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {menuItems.map((item) => (
              <NavLink to={item.path} key={item.path} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} REACT_ENV. All rights reserved.</p>
          <p>Built with React, Sass, and a little visual rhythm.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
