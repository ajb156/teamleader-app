import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamily, getObjetives } from "../../actions/objetiveActions";
import { getPeriods } from "../../actions/periodActions";
import { Objetive } from "./Objetive";

export const ObjetiveScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObjetives());
    dispatch(getFamily());
    dispatch(getPeriods());
  }, [dispatch]);

  const { objetives, families, periods } = useSelector(
    (state) => state.objetives
  );
  const handlePeriod = (e) => {
    console.log(e.target.value)
  }

  return (
    <Fragment>
      <div className="row float-right">
      <form>
        <div className="form-group float-rigth">
          <label>Selecciona un periodo</label>
          <select className="form-control" onChange={handlePeriod}>
            {
              periods.map((period) => (
                <option value={period._id} key={period._id}>{period.name}</option>
              ))
            }
          </select>
        </div>
      </form>

      </div>

      <ul className="list-group">
          <div className="row">
            <div className="col-xs-6">
              <ul className="list-group">
                <li className="list-group-item border-bottom-red">
                  <b>Jornada</b>
                </li>
                {families.map((f) => (
                  <li className="list-group-item" key={f._id}>
                    <b>{f.name}</b>
                  </li>
                ))}
              </ul>
            </div>

            {objetives.map((obj, i) => (
              <div className="col-xs-1 padding" key={i}>
                <ul className="list-group">
                  <Objetive obj={obj}  />
                </ul>
              </div>
            ))}
          </div>
      </ul>
    </Fragment>
  );
};
