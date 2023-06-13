import * as Yup from 'yup'

export const tyresSchema = Yup.object().shape({
    numero: Yup
        .string()
        .required("Este campo es obligatorio"),
})