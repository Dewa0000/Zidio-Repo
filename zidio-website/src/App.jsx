import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import JobsPage from './Pages/JobsPage';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup'; // Ensure this component exists
import Login from './Pages/Login';   // Ensure this component exists
import Timeline from './Pages/Timeline';   // Ensure this component exists
import Services from './Pages/Services'; // Ensure this component exists
import Contact from './Pages/Contact';   // Ensure this component exists
import MainLayout from './Layout/MainLayout';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/JobsPage' element={<JobsPage />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/about' element={<Timeline />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
