import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createObjetive, getFamily } from "../../actions/objetiveActions";
import { getPeriods } from "../../actions/periodActions";
import { getAllworkingDays } from "../../actions/workingDayActions";

export const ObjetiveForm = () => {
  const [objetives, setObjetives] = useState({
    period: "",
    workingDay: "",
    actGaMi: "",
    empFijo: "",
    excTotalDispo: "",
    excPto: "",
    i360FijoCbuEbu: "",
    i360HiNi: "",
    i360IotPto: "",
    i360PortaMovilCbuEbu: "",
    i360Prepago: "",
    i360Seguros: "",
    i360Terminales: "",
    lowiFix: "",
    lowiMovil: "",
    lowiPtos: "",
    MigDestIntra: "",
    oneProfesional: "",
    portasOc: "",
    portasOcEmpresas: "",
  });

  const { period, workingDay } = objetives;
  const { families } = useSelector((state) => state.objetives);
  const { periods } = useSelector((state) => state.objetives);
  const { workingDays } = useSelector((state) => state.workingDays);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFamily());
    dispatch(getPeriods());
    dispatch(getAllworkingDays());
  }, [dispatch]);

  const handleInputs = (e) => {
    setObjetives({
      ...objetives,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(objetives);
    //dispatch(createObjetive(objetives));
  };

  return (
    <form onSubmit={handleForm}>

<div className="card">
  
</div>
    <div class="row">
        <div class="col">
        <select
            className="form-control"
            name="period"
            value={period}
            onChange={handleInputs}
          >
            <option>Selecciona un periodo</option>
            {periods.map((period) => (
              <option key={period._id} value={period._id}>
                {period.name}
              </option>
            ))}
          </select>
        </div>
        <div class="col">
        <select
            className="form-control"
            name="workingDay"
            onChange={handleInputs}
            value={workingDay}
          >
            <option>Selecciona una jornada</option>
            {workingDays.map((working) => (
              <option key={working._id} value={working._id}>
                {working.name}
              </option>
            ))}
          </select>
        </div>
      </div>



      <button type="submit" className="btn btn-danger">
        Guardar
      </button>
    </form>
  );
};
