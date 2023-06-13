import * as Yup from 'yup'

export const tyresSizeSchema = Yup.object().shape({
    medida: Yup
        .string()
        .required("Este campo es obligatorio"),
})