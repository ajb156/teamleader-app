import React from "react";
import { useDispatch } from "react-redux";
import { activatePeriod, selectPeriod } from "../../actions/periodActions";

export const Period = ({ period, index }) => {
  const dispatch = useDispatch();

  /**
   * Activar / Desactivar un periodo
   */
  const handleActivate = (period) => {
    dispatch(activatePeriod(period));
  };

  /**
   * Editar un periodo
   */
  const handleEdit = (period) => {
    dispatch(selectPeriod(period))
  }



  return (
    <tr>
      <th className="d-none d-sm-block">{index + 1}</th>
      <td>{period.name}</td>
      <td>
        {period.active ? (
          <span className="badge  badge-success">ACTIVO</span>
        ) : (
          <span className="badge badge-warning">INACTIVO</span>
        )}
      </td>
      <td className="text-center">
        <button 
          type="button" 
          className="btn btn-sm btn-primary"
          onClick={() => handleEdit(period)}
        >
          Editar
        </button>
        <button
          onClick={() => handleActivate(period)}
          type="button"
          className={`btn btn-sm  ml-1 ${
            period.active ? "btn-secondary" : "btn-success"
          }`}
        >
          {!period.active ? "Activar" : "Desactivar"}
        </button>
      </td>
    </tr>
  );
};
