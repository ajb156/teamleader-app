import React, { useEffect } from "react";
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
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {families.map((family) => (
          <tr key={family._id}>
            <th scope="row">{family.name}</th>
            {
              objetives.map((obj) => (
                <><td>{obj.lowi}</td><td>Otto</td><td>@mdo</td></>

              ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};
