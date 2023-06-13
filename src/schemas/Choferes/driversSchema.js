import * as Yup from 'yup'

export const driversSchema = Yup.object().shape({
    cuil: Yup
        .string()
        .required("Este campo es obligatorio"),
    direccion: Yup
        .string()
        .required("Este campo es obligatorio"),
    codigoPostal: Yup
        .number()
        .required("Este campo es obligatorio"),
    telefono: Yup
        .string()
        .required("Este campo es obligatorio"),
    correo: Yup
        .string(),
    apelnomb: Yup
        .string()
        .required("Este campo es obligatorio"),
})