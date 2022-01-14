import React, { Fragment } from "react";

export const Objetive = ({ obj, index }) => {
  return (
    <Fragment>
      <li className="list-group-item text-center border-bottom-red">
        <b>{obj.workingDay.name}</b>
      </li>
      <li className="list-group-item text-center">{obj.empFijo}</li>
      <li className="list-group-item text-center">{obj.empFijo}</li>
      <li className="list-group-item text-center">{obj.excTotalDispo}</li>
      <li className="list-group-item text-center">{obj.excPto}</li>
      <li className="list-group-item text-center">{obj.i360FijoCbuEbu}</li>
      <li className="list-group-item text-center">{obj.i360HiNi}</li>
      <li className="list-group-item text-center">{obj.i360IotPto}</li>
      <li className="list-group-item text-center">
        {obj.i360PortaMovilCbuEbu}
      </li>
      <li className="list-group-item text-center">{obj.i360Prepago}</li>
      <li className="list-group-item text-center">{obj.i360Seguros}</li>
      <li className="list-group-item text-center">{obj.i360Terminales}</li>
      <li className="list-group-item text-center">{obj.lowiFix}</li>
      <li className="list-group-item text-center">{obj.lowiMovil}</li>
      <li className="list-group-item text-center">{obj.lowiPtos}</li>
      <li className="list-group-item text-center">{obj.migDestIntra}</li>
      <li className="list-group-item text-center">{obj.oneProfesional}</li>
      <li className="list-group-item text-center">{obj.portasOc}</li>
      <li className="list-group-item text-center">{obj.portasOcEmpresas}</li>
    </Fragment>
  );
};
