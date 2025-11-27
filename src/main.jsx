import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

AOS.init({ duration: 800, offset: 50 });
document.documentElement.setAttribute("data-theme", "light");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
