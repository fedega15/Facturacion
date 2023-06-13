import * as Yup from "yup";

export const personalVehiclesSchema = Yup.object().shape({
    patente: Yup.string()
        .required("Este campo es obligatorio")
        .matches(
            /^([A-Z]{3}[0-9]{3}|[A-Z]{2}[0-9]{3}[A-Z]{2})$/,
            "Debe ingresar una patente valida"
        ),
});