import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/home',
      element: <HomePage />
    }, 
    {
      path: '/contact',
      element: <Contact />      
    },
    {
      path: '/portfolio',
      element: <Portfolio />   
    },
]}    
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
