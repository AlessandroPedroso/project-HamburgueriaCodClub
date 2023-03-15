import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './containers/Login'
import GlobalStyles from './styles/GlobalStyles'
import Register from './containers/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Login />
  </React.StrictMode>,
)
