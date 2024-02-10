import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage.jsx';
import PostPage from './pages/PostPage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';


// create router (argument array with objects)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/posts',
        element: <PostPage />
      },
      {
        path: '/posts/:id',
        element: <PostDetailPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
