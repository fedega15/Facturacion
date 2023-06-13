import * as Yup from "yup";

export const eventSchema = Yup.object().shape({
  id_vehiculo: Yup.number().required("Este campo es obligatorio"),
  desc_evento: Yup.string().required("Este campo es obligatorio"),
  kilometros: Yup.number().required("Este campo es obligatorio"),
});
