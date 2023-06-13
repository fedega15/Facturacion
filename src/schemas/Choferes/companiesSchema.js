import * as Yup from 'yup'

export const companiesSchema = Yup.object().shape({
    nomb_empresa: Yup
        .string()
        .required("Este campo es obligatorio"),
})