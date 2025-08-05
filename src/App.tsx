import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/navbar';
import Levium from './levium';
import Error from './pages/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Levium />,
    errorElement: <Error />  
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
