import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link navbar-brand"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link "  to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;