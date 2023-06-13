import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(5, 'Muy corto')
        .max(50, 'Muy largo')
        .required("Este campo es obligatorio"),
    email: Yup.string()
        .email("Ingrese un formato valido de correo")
            .required("Este campo es obligatorio"),
    password: Yup.string()
        .required("Este campo es obligatorio"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden")
        .required("Este campo es obligatorio"),
})

