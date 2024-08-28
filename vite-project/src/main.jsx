import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Context/ContextProvider.jsx'
// import { AuthContext } from './Context/ContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthProvider>
     <App />
  </AuthProvider>

)
