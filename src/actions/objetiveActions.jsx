import toast from "react-hot-toast";
import $ from "jquery";
import { clienteAxiosToken } from "../helpers/axios";
import { types } from "../types";

// Obtener todas las familias de objetivos
export const getFamily = () => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.get("/objetive-families");
      dispatch(familyGet(res.data.families));
    } catch (error) {
      console.log(error);
    }
  };
};

// Accion para obtener las familias
const familyGet = (families) => {
  return {
    type: types.ObjetiveFamily,
    payload: families,
  };
};

// Crear una nueva familia
export const createFamily = (family) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post("/objetive-families", family);
      toast.success("Familia registrada correctamente");
      $("#objetiveFamilyModal").modal("hide");
      dispatch(familyCreate(res.data.family));
    } catch (error) {
      toast.error("No se pudo registar");
    }
  };
};

const familyCreate = (family) => {
  return {
    type: types.ObjetiveFamilyCreate,
    payload: family,
  };
};

// Obtener todos los objetivos
export const getObjetives = (objetives) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.get("/objetives");
      dispatch(objetivesGet(res.data.objetives));
    } catch (error) {
      toast.error("No se pudieron cargar los objetivos");
    }
  };
};

// Accion para obtener todos los objetivos
const objetivesGet = (objetives) => {
  return {
    type: types.ObjetiveGet,
    payload: objetives,
  };
};

// Registrar nuevo objetivo
export const createObjetive = (objetive) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post("/objetive", objetive);
      dispatch(objetiveCreate(res.data.objetive));
      toast.success("Se registro correctamente");
    } catch (error) {
      console.log(error);
      toast.error("No se pudo registrar el objetivo");
    }
  };
};

// Accion para registrar el objetivo
const objetiveCreate = (objetive) => {
  return {
    type: types.ObjetiveCreate,
    payload: objetive,
  };
};
