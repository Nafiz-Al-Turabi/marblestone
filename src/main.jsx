import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/fonts/fonts.css';
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#fafafb]'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
