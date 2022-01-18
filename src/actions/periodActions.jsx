import toast from "react-hot-toast";
import $ from "jquery";
import { clienteAxiosToken } from "../helpers/axios";
import { types } from "../types";

/**
 * nuevo periodo
 * @param {Start Date, End Date} period
 * @returns
 */

export const createPeriod = (period) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post("/periods", period);
      dispatch(periodCreate(res.data.period));
    } catch (error) {
      console.log(error);
      toast.error("No se pudo registar el periodo");
    }
  };
};

const periodCreate = (period) => {
  return {
    type: types.PeriodCreate,
    payload: period,
  };
};

/**
 * Obtiene todos los periodos
 * @returns periods[]
 */
export const getPeriods = () => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.get("/periods");
      dispatch(periodsGet(res.data.periods));
    } catch (error) {
      console.log(error);
      toast.error("No se pueden obtener los periodos");
    }
  };
};

const periodsGet = (periods) => {
  return {
    type: types.PeriodsGet,
    payload: periods,
  };
};

/**
 * Activar / Desactivar un periodo
 * @returns periodo
 */
export const activatePeriod = (period) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post(
        `/periods/activate/${period._id}`
      );
      dispatch(periodActivate(res.data.period));
      toast.success("Periodo Actualizado correctamente");
    } catch (error) {
      toast.error("El periodo no se pudo actualizar");
    }
  };
};

const periodActivate = (period) => {
  return {
    type: types.PeriodsActivate,
    payload: period,
  };
};

/**
 * Seleccion del periodo a editar
 */
export const selectPeriod = (period) => {
  return async (dispatch) => {
    dispatch(periodSelect(period));
    $("#periodModal").modal("show");
  };
};

const periodSelect = (period) => {
  return {
    type: types.PeriodSelect,
    payload: period,
  };
};

/**
 * Editar un periodo
 */
export const editPeriod = (period) => {
  return async (dispatch) => {
    const res = await clienteAxiosToken.put(
      `periods/update/${period._id}`,
      period
    );
    $("#periodModal").modal("hide");
    dispatch(periodEdit(res.data.period));
    toast.success("Periodo Actualizado correctamente");
  };
};

const periodEdit = (period) => {
  return {
    type: types.PeriodsUpdate,
    payload: period,
  };
};
