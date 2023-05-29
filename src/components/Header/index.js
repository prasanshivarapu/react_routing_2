import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="down">
      <img
        className="image1"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />

      <p>Wave</p>
    </div>

    <ul className="head">
      <li className="head1">
        <Link to="/">Home </Link>
      </li>

      <li className="head1">
        <Link to="/about">About</Link>
      </li>
      <li className="head1">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
