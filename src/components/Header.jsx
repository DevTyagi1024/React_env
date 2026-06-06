import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { menuItems } from '../data/navigation'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-container site-header-inner container">
        <Link className="brand" to="/" aria-label="REACT ENV home">
          <span className="brand-mark">
            <img src={reactLogo} alt="" />
          </span>
          <span className="brand-name">REACT_ENV</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}>
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              end={item.path === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
