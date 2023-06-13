import * as Yup from "yup";

export const forgotPassSchema = Yup.object().shape({
  userMail: Yup.string()
    .email("Ingrese un formato valido de correo")
    .required("Este campo es obligatorio"),
});
