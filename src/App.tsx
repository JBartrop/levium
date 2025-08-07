import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/navbar';
import Levium from './levium';
import Error from './pages/error';
import MainLayout from './layout/main';
import AboutPage from './pages/aboutpage';
import ProjectPage from './pages/projectspage';
import WorkPage from './pages/workpage';
import ContactPage from './pages/contactpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />, 
    children: [
      {
        path: "/",
        element: <Levium />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "workprocess",
        element: <WorkPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ]
  },
  {
    path: "*",
    element: <Error />,
  }
])



const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer autoClose={200} closeButton={true} hideProgressBar={true} position="top-center"  />
    </div>
  );
}

export default App;
