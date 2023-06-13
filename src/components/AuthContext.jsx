import { createContext, useContext, useEffect, useState } from 'react';
import { IsLogged } from '../api/userAPI';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  routes: [],
  setRoutes: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [routes, setRoutes] = useState([])
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const isAuth = async () => {
      try {
        const response = await IsLogged();
        if (response.data.loginStatus === true) {
          setAuth(true); 
          setRoutes(response.data.userNavBar);
          setUserName(response.data.userName)
        }else{
          setAuth(null);
          setRoutes([]);
        }
      } catch(error) {
        setAuth(null);
        setRoutes([]);
        setUserName('')
      };
    };
    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, routes, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
