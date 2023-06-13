import * as Yup from 'yup'

export const changePassSchema = Yup.object().shape({
    userPassword: Yup.string()
        .required("Este campo es obligatorio"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('userPassword'), null], "Las contraseñas no coinciden")
        .required("Este campo es obligatorio"),
})
