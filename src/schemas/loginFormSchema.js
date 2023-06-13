import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});
