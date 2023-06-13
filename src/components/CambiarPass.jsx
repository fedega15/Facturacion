import { useState } from "react";
import { changePassSchema } from "../schemas/changePassSchema";
import { useFormik } from "formik";
import { changePass } from "../api/userAPI";
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export default function CambiarPass() {
    const [esperando, setEsperando] = useState(true);
    const [respuesta,setRespuesta] = useState('');
    const [alertType, setAlertType] = useState(null);
    const {resettoken} = useParams();
    const onSubmit = async (values, actions) => {
        setEsperando(true);
        try {
          const response = await changePass(values,resettoken);
          if(response.data){
            setAlertType("success");
            setRespuesta(response.data.msj);
            setEsperando(false);
          }
        } catch (error) {
            setAlertType("danger");
            setRespuesta(error.response.data.msj);
            setEsperando(false);
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
            userPassword: "",
            repeatPassword: "",
        },
        validationSchema: changePassSchema,
        onSubmit,
      });    
      return (
        <div>
         {esperando?
        null
        :
        <Alert variant={alertType} style={{textAlign: "center"}}>
            <b>
                {respuesta}
            </b>
        </Alert>
        }
        <form onSubmit={handleSubmit} className="login-container m-auto">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="userPassword"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.userPassword && touched.userPassword ? "input-error" : ""
            }
          />
          {errors.userPassword && touched.userPassword && (
            <p className="error">{errors.userPassword}</p>
          )}
          <label>Repetir Contraseña</label>
          <input
            type="password"
            placeholder="Repetir contraseña"
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.repeatPassword && touched.repeatPassword ? "input-error" : ""
            }
          />
          {errors.repeatPassword && touched.repeatPassword && (
            <p className="error">{errors.repeatPassword}</p>
          )}
          <button className="customBtn" disabled={isSubmitting} type="submit">
            Cambiar contraseña
          </button>
        </form>
        </div>
      );
    }
