import { StrictMode } from 'react'
// ^ will render everything twice, and catches different rendering issues
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Resume from './pages/Resume.jsx'
import AboutMe from './pages/AboutMe.jsx'

import './index.css'

// function that accepts an array of different routes (objects) and we're putting it in a variable ROUTER
// we define the path, and then it renders the element
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

// selector selects root, rendering this component
// we COULD render the App, but instead we render the RouterProvider WITH the router variable passed in as a prop (parameter / object)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);