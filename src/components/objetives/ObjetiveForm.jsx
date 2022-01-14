import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createObjetive, getFamily } from "../../actions/objetiveActions";
import { getPeriods } from "../../actions/periodActions";
import { getAllworkingDays } from "../../actions/workingDayActions";

export const ObjetiveForm = () => {
  const [objetive, setObjetive] = useState({
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
    migDestIntra: "",
    oneProfesional: "",
    portasOc: "",
    portasOcEmpresas: "",
  });

  const {
    period,
    workingDay,
    actGaMi,
    empFijo,
    excTotalDispo,
    excPto,
    i360FijoCbuEbu,
    i360HiNi,
    i360IotPto,
    i360PortaMovilCbuEbu,
    i360Prepago,
    i360Seguros,
    i360Terminales,
    lowiFix,
    lowiMovil,
    lowiPtos,
    migDestIntra,
    oneProfesional,
    portasOc,
    portasOcEmpresas,
  } = objetive;

  const { periods } = useSelector((state) => state.objetives);
  const { workingDays } = useSelector((state) => state.workingDays);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFamily());
    dispatch(getPeriods());
    dispatch(getAllworkingDays());
  }, [dispatch]);

  const handleInputs = (e) => {
    setObjetive({
      ...objetive,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(createObjetive(objetive));
  };

  return (
    <form onSubmit={handleForm}>
      <div className="card">
        <div className="card-header">
          <b>Registro de Objetivos</b>
        </div>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Periodo</label>
              <select
                className="form-control"
                name="period"
                value={period}
                onChange={handleInputs}
              >
                <option>Selecciona un periodo:</option>
                {periods.map((period) => (
                  <option key={period._id} value={period._id}>
                    {period.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label>Jornada:</label>
              <select
                className="form-control"
                name="workingDay"
                value={workingDay}
                onChange={handleInputs}
              >
                <option>Selecciona un periodo:</option>
                {workingDays.map((workingDay) => (
                  <option key={workingDay._id} value={workingDay._id}>
                    {workingDay.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Activación (GA+Migr):</label>
              <input
                type="number"
                className="form-control"
                name="actGaMi"
                value={actGaMi}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Empresas Fijo:</label>
              <input
                type="number"
                className="form-control"
                name="empFijo"
                value={empFijo}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Excelencia - Total dispositivos: </label>
              <input
                type="number"
                className="form-control"
                name="excTotalDispo"
                value={excTotalDispo}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Excelencia Pto:</label>
              <input
                type="number"
                className="form-control"
                name="excPto"
                value={excPto}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Indice 360 - Activación fijo CBU+EBU:</label>
              <input
                type="number"
                className="form-control"
                name="i360FijoCbuEbu"
                value={i360FijoCbuEbu}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Indice 360 - Hogar y Negocio Ilimitable:</label>
              <input
                type="number"
                className="form-control"
                name="i360HiNi"
                value={i360HiNi}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Indice 360 - IoT Pto:</label>
              <input
                type="number"
                className="form-control"
                name="i360IotPto"
                value={i360IotPto}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Indice 360 - Portabilidad móvil CBU+EBU:</label>
              <input
                type="number"
                className="form-control"
                name="i360PortaMovilCbuEbu"
                value={i360PortaMovilCbuEbu}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Indice 360 - Prepago:</label>
              <input
                type="number"
                className="form-control"
                name="i360Prepago"
                value={i360Prepago}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Indice 360 - Seguros:</label>
              <input
                type="number"
                className="form-control"
                name="i360Seguros"
                value={i360Seguros}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Lowi Fix:</label>
              <input
                type="number"
                className="form-control"
                name="lowiFix"
                value={lowiFix}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group col-md-4">
              <label>Lowi Movil:</label>
              <input
                type="number"
                className="form-control"
                name="lowiMovil"
                value={lowiMovil}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group col-md-4">
              <label>Lowi Puntos:</label>
              <input
                type="number"
                className="form-control"
                name="lowiPtos"
                value={lowiPtos}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Indice 360 - Terminales:</label>
              <input
                type="number"
                className="form-control"
                name="i360Terminales"
                value={i360Terminales}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Migraciones Destiny e Intrades:</label>
              <input
                type="number"
                className="form-control"
                name="migDestIntra"
                value={migDestIntra}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label>One Profesional:</label>
              <input
                type="number"
                className="form-control"
                name="oneProfesional"
                value={oneProfesional}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group col-md-4">
              <label>Portabilidad OC:</label>
              <input
                type="number"
                className="form-control"
                name="portasOc"
                value={portasOc}
                onChange={handleInputs}
              />
            </div>

            <div className="form-group col-md-4">
              <label>Portabilidad OC Empresas:</label>
              <input
                type="number"
                className="form-control"
                name="portasOcEmpresas"
                value={portasOcEmpresas}
                onChange={handleInputs}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-danger">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};
