import React from 'react';
import '../../css/sb-admin-2.min.css';

function Page_Error() {
  return (
    <>
    {/* 404 Error Text */}
<div className="text-center">
  <div className="error mx-auto" data-text={404}>404</div>
  <p className="lead text-gray-800 mb-5">Page Not Found</p>
  <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
  <a href="/">← Back to Dashboard</a>
</div>
{/* /.container-fluid */}
{/* End of Main Content */}
</>

  )
}

export default Page_Error;