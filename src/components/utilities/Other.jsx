import React from 'react';

function Other() {
  return (
<div className="container-fluid">
  {/* Page Heading */}
  <h1 classname="h3 mb-1 text-gray-800">Other Utilities</h1>
  <p classname="mb-4">Bootstrap's default utility classNamees can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classNamees built into Bootstrap's
    framework.</p>
  {/* Content Row */}
  <div classname="row">
    <div classname="col-lg-6">
      {/* Overflow Hidden */}
      <div classname="card mb-4">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Overflow Hidden Utilty</h6>
        </div>
        <div classname="card-body">
          Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
        </div>
      </div>
      {/* Progress Small */}
      <div classname="card mb-4">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Progress Small Utility</h6>
        </div>
        <div classname="card-body">
          <div classname="mb-1 small">Normal Progress Bar</div>
          <div classname="progress mb-4">
            <div classname="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div classname="mb-1 small">Small Progress Bar</div>
          <div classname="progress progress-sm mb-2">
            <div classname="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          Use the <code>.progress-sm</code> className along with <code>.progress</code>
        </div>
      </div>
      {/* Dropdown No Arrow */}
      <div classname="card mb-4">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
        </div>
        <div classname="card-body">
          <div classname="dropdown no-arrow mb-4">
            <button classname="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown (no arrow)
            </button>
            <div classname="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a classname="dropdown-item" href="#">Action</a>
              <a classname="dropdown-item" href="#">Another action</a>
              <a classname="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          Add the <code>.no-arrow</code> className alongside the <code>.dropdown</code>
        </div>
      </div>
    </div>
    <div classname="col-lg-6">
      {/* Roitation Utilities */}
      <div classname="card">
        <div classname="card-header py-3">
          <h6 classname="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
        </div>
        <div classname="card-body text-center">
          <div classname="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15
          </div>
          <hr />
          <div classname="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
</div>


  )
}

export default Other;