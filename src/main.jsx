import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/GlobalStyles'

import { UserProvider } from './hooks/UserContext'

import Routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <Routes />
        </UserProvider>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
    </React.StrictMode>,
)
