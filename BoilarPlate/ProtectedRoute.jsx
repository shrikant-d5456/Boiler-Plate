import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import { UserContext } from '../Utils/UserContext.jsx';

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/" />
}


export default ProtectedRoute

/*
< Route element = {< ProtectedRoute />}>
          <Route path='/posts/post/:id' element={<PostDetails />} />
</Route >
*/