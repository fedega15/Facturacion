import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
//PAGES
//--Basisc
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
//--Entidades
/*
import Vehiculos from "./pages/Vehiculos";
import Choferes from "./pages/Choferes";
import Cubiertas from "./pages/Cubiertas";
import Viajes from "./pages/Viajes";
import Operativos from "./pages/Operativos";
import VehiculosPersonal from "./pages/VehiculosPersonal";
import CubiertasPersonal from "./pages/CubiertasPersonal";
import OperativosViajes from "./pages/Operativos/details";
//components
*/
import NavBarNotAuth from "./components/NavBars/NavBarNotAuth";
import NavBarCustom from "./components/NavBars/NavBarCustom";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import CambiarPass from "./components/CambiarPass";
//AuthContext
import { useAuth } from "./components/AuthContext";
//Comp Map for auth users pages
const COMPONENT_MAP = {/*
  Vehiculos: <Vehiculos />,
  Choferes: <Choferes />,
  Cubiertas: <Cubiertas />,
  Viajes: <Viajes />,
  Operativos: <Operativos />,
  VehiculosPersonal: <VehiculosPersonal />,
  CubiertasPersonal: <CubiertasPersonal />,*/
};
function App() {
  const { auth, routes } = useAuth();
  const getUserRoutes = () => {
    let content = [];
    for (var key in routes[0]) {
      content.push(
        routes[0][key].map((r) => {
          return (
            <Route
              path={r.path}
              key={r.id}
              element={COMPONENT_MAP[r.element]}
            />
          );
        })
      );
    }
    return content;
  };
  return (
    <>
      {!auth ? (
        <div>
          <NavBarNotAuth />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password/:resettoken" element={<CambiarPass />} />
          </Routes>
        </div>
      ) : (
        <div>
          <NavBarCustom />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {routes ? getUserRoutes() : null}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
           /* <Route path="/operativos/viajes/:id" element={<OperativosViajes />} />*/
      )}
    </>
    /*<div>
      <button onClick={handleTest}>Probar algo</button>
  </div>*/
    /*El btn de "Probar algo" es una ayuda que tengo */
  );
}

export default App;
