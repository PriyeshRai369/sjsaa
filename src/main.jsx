import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ContextProvider from './context/Context.jsx'

const Home = lazy(() => import('./components/Home/Home.jsx'));
const AboutUs = lazy(() => import('./components/About/AboutUs.jsx'));
const OurAlumni = lazy(() => import('./components/OurAlumni/OurAlumni.jsx'));
const UpcomingEvents = lazy(() => import('./components/UpcomingEvents/UpcomingEvents.jsx'));
const Gallery = lazy(() => import('./components/Gallery/Gallery.jsx'));
const Profile = lazy(() => import('./components/Profile/Profile.jsx'));
const NotFoundPage = lazy(() => import('./components/NotFound/NotFoundPage.jsx'));
const UserProfile = lazy(() => import('./components/UserProfile/UserProfile.jsx'));
const AllManagingMembers = lazy(() => import('./components/AllManagingMembers/AllManagingMembers.jsx'));
import Loader from './components/Loader/Loader.jsx'
const MovieGallery = lazy(()=>import("./components/MovieGallery/MovieGallery.jsx"))
const AGMElection = lazy(()=>import("./components/AGMElection/AGMElection.jsx"))
const RegistrationForm = lazy(()=>import("./components/RegistrationForm/RegistrationForm.jsx"))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route
        path='/'
        element={
          <Suspense fallback={<Loader/>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path='/our-alumni'
        element={
          <Suspense fallback={<Loader/>}>
            <OurAlumni />
          </Suspense>
        }
      />
      <Route
        path='/new-member-registration'
        element={
          <Suspense fallback={<Loader/>}>
            <RegistrationForm />
          </Suspense>
        }
      />
      <Route
        path='/about-us'
        element={
          <Suspense fallback={<Loader/>}>
            <AboutUs />
          </Suspense>
        }
      />
      <Route
        path='/event'
        element={
          <Suspense fallback={<Loader/>}>
            <UpcomingEvents />
          </Suspense>
        }
      />
      <Route
        path='/gallery'
        element={
          <Suspense fallback={<Loader/>}>
            <Gallery />
          </Suspense>
        }
      />

      <Route
        path='/gallery/movie-gallery'
        element={
          <Suspense fallback={<Loader/>}>
            <MovieGallery />
          </Suspense>
        }
      />
      <Route
        path='/gallery/agm-election-gallery'
        element={
          <Suspense fallback={<Loader/>}>
            <AGMElection />
          </Suspense>
        }
      />
      
      <Route
        path='/managing-committee-members'
        element={
          <Suspense fallback={<Loader/>}>
            <AllManagingMembers />
          </Suspense>
        }
      />
      <Route
        path='/profile'
        element={
          <Suspense fallback={<Loader/>}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path='/user/profile/:id'
        element={
          <Suspense fallback={<Loader/>}>
            <UserProfile />
          </Suspense>
        }
      />
      
      <Route
        path='*'
        element={
          <Suspense fallback={<Loader/>}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
