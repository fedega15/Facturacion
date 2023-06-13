import { useFormik } from "formik";
import { loginFormSchema } from "../schemas/loginFormSchema";
import { loginRequest } from "../api/userAPI";
import { useNavigate } from "react-router-dom";
import {useAuth} from './AuthContext';
import { useState } from "react";

export default function LoginForm() {
  const { setAuth, setRoutes } = useAuth();
  const [esperando, setEsperando] = useState(true);
  const [respuesta,setRespuesta] = useState('');
  const [alertType, setAlertType] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    setEsperando(true);
    try {
      const response = await loginRequest(values); //response.data.exist
      if (response.data.loginStatus){
        setAuth(true);
        navigate("/");
        setRoutes(response.data.userNavBar);
        setEsperando(false);
      }
    } catch (error) {
      if (error.response) {
        setAlertType("alert alert-danger");
        setRespuesta(error.response.data.msj);
        setEsperando(false);
      }
    }
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });
  return (
    <div className="login-container m-auto">    
      {esperando?
        null
        :
        <div className={alertType} role="alert" style={{textAlign: "center", width:'27%', margin:'0 auto'}}>
            <b>
                {respuesta}
            </b>
        </div> 
      }
      <form onSubmit={handleSubmit}>
        <label>Mail</label>
        <input
          type="email"
          placeholder="Mail"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.password && touched.password ? "input-error" : ""
          }
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <button disabled={isSubmitting} type="submit" className="customBtn">
          Ingresar
        </button>
        <div>
          <p><b>Olvidaste tu contraseña?</b>&nbsp;
            <a href="forgot-password">Ingresá aquí para restablecerlo.</a>
          </p>
        </div>
      </form>
    </div>
  );
}
