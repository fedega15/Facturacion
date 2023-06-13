import { useState } from "react";
import { useFormik } from "formik";
import { forgotPassSchema } from "../schemas/forgotPassSchema";
import { reqResetEmail } from "../api/userAPI";
import Alert from 'react-bootstrap/Alert';

export default function ForgotPassword() {
    const [esperando, setEsperando] = useState(true);
    const [respuesta,setRespuesta] = useState('');
    const [alertType, setAlertType] = useState(null);
    const onSubmit = async (values, actions) => {
        setEsperando(true);
        try {
          const response = await reqResetEmail(values);
          if(response.data){
            setAlertType("alert alert-success");
            setRespuesta(response.data.msj);
            setEsperando(false);
          }
        } catch (error) {
            setAlertType("alert alert-danger");
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
        userMail: "",
      },
      validationSchema: forgotPassSchema,
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

    <div style={{textAlign: "center"}}>
        <p>
            <b>
            Para recuperar tu contraseña ingresá tu correo electronico. <br/>
            Nuestro BOT te enviará un mail con un link que te permitirá cambiar tu contraseña.
            </b>
        </p>
    </div>
    <br/>
    <form onSubmit={handleSubmit} className="login-container m-auto">
      <label>Mail</label>
      <input
        type="email"
        placeholder="Mail"
        name="userMail"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.userMail && touched.userMail ? "input-error" : ""}
      />
      {errors.userMail && touched.userMail && (
        <p className="error">{errors.userMail}</p>
      )}
      <button disabled={isSubmitting} type="submit" className="customBtn">
        Ingresar
      </button>   
    </form>
    </div>
  )
}
