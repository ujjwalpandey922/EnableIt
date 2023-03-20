import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">EnableIt</div>

      <ul className="nav-links menu">
        <li>
          <span>Home</span>
        </li>

        <li>
          <span>About</span>
        </li>
        <li>
          <span>Services</span>
        </li>
        <li>
          <span>Pricing</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
