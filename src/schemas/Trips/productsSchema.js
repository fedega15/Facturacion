import * as Yup from "yup";

export const productsSchema = Yup.object().shape({
  desc_product: Yup.string().required("Este campo es obligatorio"),
});
