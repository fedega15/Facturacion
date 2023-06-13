import * as Yup from "yup";

export const conformTeamSchema = Yup.object().shape({
    km_inicio: Yup.number().required("Este campo es obligatorio"),
});