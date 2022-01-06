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
  console.log(objetives)

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
            <td>{objetives.actGaMi}</td>
            <td>{objetives.empFijo}</td>
            <td>{objetives.excTotalDispo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
