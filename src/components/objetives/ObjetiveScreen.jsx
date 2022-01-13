import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFamily, getObjetives } from "../../actions/objetiveActions";

export const ObjetiveScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObjetives());
    dispatch(getFamily());
  }, [dispatch]);

  const { objetives, families } = useSelector((state) => state.objetives);


  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Familia</th>
          <th scope="col">40h</th>
          <th scope="col">36h</th>
          <th scope="col">30h</th>
          <th scope="col">24h</th>
        </tr>
      </thead>
      <tbody>
        {families.map((fam) => (
          <tr>
            <th scope="row">{fam.name}</th>
            {
              objetives.map((obj) => (
                <Fragment>
                  <td>{obj.empFijo}</td>
                </Fragment>
              ))
            }
          </tr>
        ))}

      </tbody>
    </table>
  );
};
