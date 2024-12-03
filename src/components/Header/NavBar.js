import * as React from 'react';


export default function NavBar() {
  return (
    <header className="sticky-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="dropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
             <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#Home">Home</a></li>
    <li><a className="dropdown-item" href="#Gallery">Gallery</a></li>
     <li><a className="dropdown-item" href="#Envelop">Envelop</a></li>
   </ul>
          {/* Centered Heading */}
          <div className="mx-auto">
            <h1 className="navbar-brand mb-0 text-center">Happy Birthday</h1>
          </div>
        </div>
      </nav>
    </header>

  );
}
