import Link from "next/link";


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link href="/">
      <a className="navbar-brand" >Home</a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <Link  href="/about">
            <a className="nav-link active">About</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link  href="/service">
            <a className="nav-link active">Service</a>
            </Link>
          </li>        
        </ul>

      </div>
    </div>
  </nav>
  )
};

export default Navigation;
