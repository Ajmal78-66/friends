import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Heder from './Heder.jsx'
import Myig from './Myig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heder/>
    <App pare={"crymore"}name={"afthab"}/>
    <App pare={"crymore"}name={"afrin"}/>
    <App pare={"crymore"}name={"humyoon"}/>
    
    <Myig/>
  


  </StrictMode>,
)
