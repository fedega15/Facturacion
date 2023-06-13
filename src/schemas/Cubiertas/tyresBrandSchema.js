import * as Yup from 'yup'

export const tyresBrandSchema = Yup.object().shape({
    marca: Yup
        .string()
        .required("Este campo es obligatorio"),
})