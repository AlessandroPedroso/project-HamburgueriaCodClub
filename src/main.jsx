import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ReactDOM from 'react-dom/client'
import Login from './containers/Login'
import GlobalStyles from './styles/GlobalStyles'
import Register from './containers/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Register />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>,
)
