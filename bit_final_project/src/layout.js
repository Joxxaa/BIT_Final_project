import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        {/* <ul>
          <li>
            <Link to="/">Interviews Reports</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </ul> */}
        <div id="main"><Link style={{textDecoration: 'none'}} to="/">Interviews Reports</Link> 
        <Link style={{textDecoration: 'none'}} to="/candidates">Candidates</Link></div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;