import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import AboutMe from './pages/AboutMe.jsx'

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
    {
      path: '/aboutme',
      element: <AboutMe />   
    },
    {
      path: '/resume',
      element: <Resume />   
    },
]}    
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);