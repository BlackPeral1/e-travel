import React, { Suspense } from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './views/common/login/LoginPage'
import Spinner from 'react-bootstrap/Spinner'



import 'react-toastify/dist/ReactToastify.css'

const loading = (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
)

// Containers


const UserLayout = React.lazy(() => import('./layout/UserLayout'))




function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
     
          <Route path="/" name="Login" element={<Login />} />
          <Route path="user/*" name="UserLayout" element={<UserLayout />} />


        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
