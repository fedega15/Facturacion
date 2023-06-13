import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/signUpSchema";
import { createUserRequest } from "../api/userAPI";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {
  const navigate = useNavigate();
  const [signupStatuts, setSignupStatuts] = useState("");
  const [signupError, setSignupError] = useState(undefined);
  const onSubmit = async (values, actions) => {
    const response = await createUserRequest(values);
    if (!response.data.error) {
      //Registrado con exito
      navigate("/");
    }
    setSignupStatuts(response.data.msj);
    setSignupError(response.data.error);
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
      nombre: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });
  //console.log(errors)
  return (
    <div className="login-container m-auto">
      <form onSubmit={handleSubmit}>
        <label>Nombre y Apellido</label>
        <input
          name="nombre"
          type="text"
          placeholder="Nombre y Apellido"
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.nombre && touched.nombre ? "input-error" : ""}
        />
        {errors.nombre && touched.nombre && (
          <p className="error">{errors.nombre}</p>
        )}
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
        {signupError ? <p className="error">{signupStatuts}</p> : ""}
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
        <button disabled={isSubmitting} type="submit" className="customBtn">
          Registrarse
        </button>
        {!signupError ? <p className="error">{signupStatuts}</p> : ""}
      </form>
    </div>
  );
}
