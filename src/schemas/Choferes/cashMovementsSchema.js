import * as Yup from "yup";

export const CashMovementsSchema = Yup.object().shape({
  ingreso: Yup.number(),
  egreso: Yup.number(),
  obs: Yup.string(),
  nro_punto_venta: Yup.number(),
  nro_comprobante: Yup.number(),
  proveedor: Yup.string(),
  fecha: Yup.date(). required("Campo obligatorio"),
});
