import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeriods } from "../../actions/periodActions";
import { Period } from "./Period";
import { PeriodForm } from "./PeriodForm";

export const PeriodsScreen = () => {
  const dispatch = useDispatch();

  const { periods } = useSelector((state) => state.periods);

  useEffect(() => {
    dispatch(getPeriods());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="card animate__animated animate__fadeIn">
        <h5 className="card-header">
          <i className="far fa-calendar"></i> Listado de Periodos
          <span className="badge badge-secondary"></span>
          <button
            type="button"
            className="btn btn-danger float-right"
            data-toggle="modal"
            data-target="#periodModal"
          >
            <i className="fa fa-plus"></i> Nuevo
          </button>
        </h5>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Estado</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {periods.map((period, i) => (
                  <Period period={period} index={i} key={period._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <PeriodForm />
    </Fragment>
  );
};
