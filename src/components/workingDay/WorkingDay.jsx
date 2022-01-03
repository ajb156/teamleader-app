import React from "react";
import { useDispatch } from "react-redux";
import {
  selectWorkingDay,
  activateWorkinDay,
} from "../../actions/workingDayActions";

export const WorkingDay = ({ workingDay, index }) => {
  const dispatch = useDispatch();

  // Seleccionar la jornada a editar
  const handleEdit = (workingDay) => {
    dispatch(selectWorkingDay(workingDay));
  };

  // Activar o desactivar las jornadas
  const handleActivate = (workingDay) => {
    dispatch(activateWorkinDay(workingDay));
  };

  return (
    <tr>
      <th scope="row" className="d-none d-sm-block">
        {index + 1}
      </th>
      <td>{workingDay.name}</td>
      <td>
        {workingDay.active ? (
          <span className="badge  badge-success">ACTIVO</span>
        ) : (
          <span className="badge badge-warning">INACTIVO</span>
        )}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => handleEdit(workingDay)}
        >
          Editar
        </button>
        <button
          type="button"
          className={`btn btn-sm  ml-1 ${
            workingDay.active ? "btn-secondary" : "btn-success"
          }`}
          onClick={() => handleActivate(workingDay)}
        >
          {!workingDay.active ? "Activar" : "Desactivar"}
        </button>
      </td>
    </tr>
  );
};
