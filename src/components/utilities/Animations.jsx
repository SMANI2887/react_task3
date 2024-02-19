import React from 'react';

function Animations() {
  return (
<div className="container-fluid">
  {/* Page Heading */}
  <h1 classname="h3 mb-1 text-gray-800">Animation Utilities</h1>
  <p classname="mb-4">Bootstrap's default utility classNamees can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classNamees built into Bootstrap's
    framework.</p>
  {/* Content Row */}
  <div classname="row">
    {/* Grow In Utility */}
    <div classname="col-lg-6">
      <div classname="card position-relative">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
        </div>
        <div classname="card-body">
          <div classname="mb-3">
            <code>.animated--grow-in</code>
          </div>
          <div classname="small mb-1">Navbar Dropdown Example:</div>
          <nav classname="navbar navbar-expand navbar-light bg-light mb-4">
            <a classname="navbar-brand" href=''>Navbar</a>
            <ul classname="navbar-nav ml-auto">
              <li classname="nav-item dropdown">
                <a classname="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div classname="dropdown-menu dropdown-menu-right animated--grow-in" aria-labelledby="navbarDropdown">
                  <a classname="dropdown-item" href="#">Action</a>
                  <a classname="dropdown-item" href="#">Another action</a>
                  <div classname="dropdown-divider" />
                  <a classname="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </nav>
          <p classname="mb-0 small">Note: This utility animates the CSS transform property,
            meaning it will override any existing transforms on an element being animated!
            In this theme, the grow in animation is only being used on dropdowns within the
            navbar.</p>
        </div>
      </div>
    </div>
    {/* Fade In Utility */}
    <div classname="col-lg-6">
      <div classname="card position-relative">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
        </div>
        <div classname="card-body">
          <div classname="mb-3">
            <code>.animated--fade-in</code>
          </div>
          <div classname="small mb-1">Navbar Dropdown Example:</div>
          <nav classname="navbar navbar-expand navbar-light bg-light mb-4">
            <a classname="navbar-brand" href="#">Navbar</a>
            <ul classname="navbar-nav ml-auto">
              <li classname="nav-item dropdown">
                <a classname="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div classname="dropdown-menu dropdown-menu-right animated--fade-in" aria-labelledby="navbarDropdown">
                  <a classname="dropdown-item" href="#">Action</a>
                  <a classname="dropdown-item" href="#">Another action</a>
                  <div classname="dropdown-divider" />
                  <a classname="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </nav>
          <div classname="small mb-1">Dropdown Button Example:</div>
          <div classname="dropdown mb-4">
            <button classname="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div classname="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
              <a classname="dropdown-item" href="#">Action</a>
              <a classname="dropdown-item" href="#">Another action</a>
              <a classname="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <p classname="mb-0 small">Note: This utility animates the CSS opacity property, meaning
            it will override any existing opacity on an element being animated!</p>
        </div>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</div>


  )
}

export default Animations;