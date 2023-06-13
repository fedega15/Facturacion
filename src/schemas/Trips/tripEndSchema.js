import * as Yup from "yup";

export const tripEndSchema = Yup.object().shape({
    km_fin: Yup.number().required("Este campo es obligatorio"),
});