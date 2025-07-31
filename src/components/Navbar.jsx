import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Web Solution</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produkte</Link></li>
        <li><Link to="/about">Über uns</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar