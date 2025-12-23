import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Menu from './pages/Menu'
import Branches from './pages/Branches'
import Contact from './pages/Contact';
import If from './pages/If';

export default function App() {
  const Routing = createBrowserRouter([
      { path: "*", element: <HomePage /> },
      { path: "/homepage", element: <HomePage /> },
      { path: "/menu", element: <Menu /> },
      { path: "/branches", element: <Branches /> },
      { path: "/contact", element: <Contact /> },
      { path: "/if", element: <If /> }
  ]);
  return (
    <RouterProvider router={Routing} />
  )
}
