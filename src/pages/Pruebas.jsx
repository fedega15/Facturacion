import React, { useState } from "react";
import FormVehiclesTyres from "./Vehiculos/components/extra/FormVehiclesTyres";
import ModalPlain from "../components/Modals/ModalPlain";

const Pruebas = () => {
  //States
  const display = false;
  const [showModalPlain, setShowModalPlain] = useState(false);
  const handleCloseModalPlain = () => setShowModalPlain(false);

  return (
    <div className="custom-container">
      {display ? (
        <div>
          <button
            onClick={() => setShowModalPlain(true)}
            className="btn btn-success mt-3 mx-3"
          >
            Prueba
          </button>
          {showModalPlain ? (
            <ModalPlain
              show={true}
              handleClose={handleCloseModalPlain}
              size={"lg"}
            >
              <FormVehiclesTyres />
            </ModalPlain>
          ) : null}
        </div>
      ) : (
        <h1>Pruebas</h1>
      )}
    </div>
  );
};

export default Pruebas;
