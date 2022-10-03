import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast(){  
  return (
    <div>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}

