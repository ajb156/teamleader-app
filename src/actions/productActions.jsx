import toast from "react-hot-toast";
import { clienteAxiosToken } from "../helpers/axios";
import { types } from "../types";

/**
 * Obtener todos los productos
 */
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.get("/products");
      dispatch(productsGet(res.data.products));
    } catch (error) {
      console.log(error)
      toast.error("No se pudieron obtener los productos");
    }
  };
};

const productsGet = (products) => {
  return {
    type: types.ProductsGet,
    payload: products,
  };
};

/**
 * Crear un nuevo producto
 */

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post("/products", product);
      dispatch(productCreate(res.data.product));
      toast.success("Producto registrado correctamente");
    } catch (error) {}
  };
};

const productCreate = (product) => {
  return {
    type: types.ProductCreate,
    payload: product,
  };
};
