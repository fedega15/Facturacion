import * as Yup from 'yup'

export const kilometresSchema = Yup.object().shape({
    kilometros_tractor: Yup
        .number()
        .required("Este campo es obligatorio"),
})