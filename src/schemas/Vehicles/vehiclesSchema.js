import * as Yup from "yup";

export const vehiclesSchema = Yup.object().shape({
  patente: Yup.string()
    .required("Este campo es obligatorio")
    .matches(
      /^([A-Z]{3}[0-9]{3}|[A-Z]{2}[0-9]{3}[A-Z]{2})$/,
      "Debe ingresar una patente valida"
    ),
  numChasis: Yup.string().required("Este campo es obligatorio"),
  numMovil: Yup.string().required("Este campo es obligatorio"),
  type: Yup.string(), 
  numMotor: Yup.string().when("type", {
    is: "Camión",
    then: Yup.string().required('Campo obligatorio'),
    otherwise: Yup.string(),
  }),
  numTitulo: Yup.string(),
  numCedulaVerde: Yup.string(),
  numRuta: Yup.string(),
  numSeguro: Yup.string(),
  numVTV: Yup.string(),
  numCredPuerto: Yup.string(),
});
