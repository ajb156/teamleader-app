import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/productActions";

export const ProductsScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="card animate__animated animate__fadeIn">
      <h5 className="card-header">
        <i className="fa fa-shopping-cart"></i> Listado de Productos
        <span className="badge badge-secondary"></span>
        <Link to="/productos/nuevo" className="btn btn-danger float-right">
          <i className="fa fa-plus"></i> Nuevo Producto
        </Link>
      </h5>
      <div className="card-body">
        <div className="table-responsive-sm">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="d-none d-sm-block">
                  #
                </th>
                <th scope="col">Tienda</th>
                <th scope="col">Estado</th>
                <th scope="col" className="text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
