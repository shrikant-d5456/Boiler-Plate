import { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log('UserContext initialized with user:', user); 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};






/* ===================================================================
// import { UserContextProvider } from './Utils/UserContext';
<UserContextProvider>
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/*' element={<PostLayout />} />
    <Route element={<ProtectedRoute />}>
      <Route path='/admin/*' element={<AdminLayout />} />
    </Route>
  </Routes>
</UserContextProvider>

*/