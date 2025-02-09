import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: {
      index: true,
      element: <HomePage />
    },
    {
    path: '/home',
    element: <HomePage />
    }, 
    {

    }
    }


])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
