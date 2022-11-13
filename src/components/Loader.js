import React from 'react';

const Loader = () => {
  return (
    <div>
        <div className="mx-auto position-absolute top-50 start-50 translate-middle">
          <div class="spinner-grow text-primary p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark p-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
  )
}

export default Loader