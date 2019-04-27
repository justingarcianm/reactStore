import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="#">Game Store <i className="fas fa-gamepad"></i></a>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          System<span className="sr-only">(current)</span>
        </a>  
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Xbox</a>
          <a className="dropdown-item" href="#">Playstation</a>
          <a className="dropdown-item" href="#">Nintendo Switch</a>
          <a className="dropdown-item" href="#">PC</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="genreDrop" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genre
        </a>
        <div className="dropdown-menu" aria-labelledby="genreDrop">
          <a className="dropdown-item" href="#">All</a>
          <a className="dropdown-item" href="#">FPS</a>
          <a className="dropdown-item" href="#">Role playing</a>
          <a className="dropdown-item" href="#">Indie</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search Titles" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
    </form>
  </div>
</nav>
    )
}

export default Nav