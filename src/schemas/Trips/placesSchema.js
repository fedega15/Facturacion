import * as Yup from "yup";

export const placesSchema = Yup.object().shape({
  desc_place: Yup.string().required("Este campo es obligatorio"),
});
