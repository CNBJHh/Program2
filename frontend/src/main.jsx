import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Style layers — order matters (cascade)
import './styles/tokens.css'
import './styles/reset.css'
import './styles/glassmorphism.css'
import './styles/animations.css'
import './styles/layout.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
