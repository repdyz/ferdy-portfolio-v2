import profile from '../../data/profile'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-links" aria-label="Main navigation">
        {profile.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar