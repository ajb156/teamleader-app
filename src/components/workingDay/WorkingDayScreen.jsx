import React from "react";
import { useEffect, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllworkingDays, editModeWorkingDay } from "../../actions/workingDayActions";
import { WorkingDay } from "./WorkingDay";
import { WorkingDayForm } from "./WorkingDayForm";

export const WorkingDayScreen = () => {

  const dispatch = useDispatch();
  const { workingDays } = useSelector((state) => state.workingDays);


  useEffect(() => {
    dispatch(getAllworkingDays());
  }, [dispatch]);

  const newWorking = () => {
    dispatch(editModeWorkingDay());
  };

  return (
    <Fragment>
      <div className="card animate__animated animate__fadeIn">
        <h5 className="card-header">
          <i className="fas fa-user-clock"></i> Listado de Jornadas
          <span className="badge badge-secondary"></span>
          <button
            type="button"
            className="btn btn-danger float-right"
            data-toggle="modal"
            onClick={newWorking}
            data-target="#workingDayModal"
          >
            <i className="fa fa-plus"></i> Nueva Jornada
          </button>
        </h5>
        <div className="card-body">
          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Jornada</th>
                  <th scope="col">Estado</th>
                  <th scope="col" className="text-center">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {workingDays.map((workingDay, i) => (
                  <WorkingDay
                    workingDay={workingDay}
                    index={i}
                    key={workingDay._id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <WorkingDayForm />
    </Fragment>
  );
};
