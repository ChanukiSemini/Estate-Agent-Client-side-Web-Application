import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import {BrowserRuter} from 'react-roouter-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRuter>
    <App />
  </BrowserRuter>,
)
