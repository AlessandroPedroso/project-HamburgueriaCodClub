import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/GlobalStyles'

import AppProvider from './hooks'

import Routes from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <Routes />
        </AppProvider>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
    </React.StrictMode>,
)
