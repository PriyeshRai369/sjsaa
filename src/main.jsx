import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import AboutUs from './components/About/AboutUs.jsx'
import Home from './components/Home/Home.jsx'
import OurAlumni from './components/OurAlumni/OurAlumni.jsx'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import ContextProvider from './context/Context.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/our-alumni' element={<OurAlumni/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/event' element={<UpcomingEvents/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router}  />
  </ContextProvider>,
)
