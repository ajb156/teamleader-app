import toast from "react-hot-toast";
import { clienteAxiosToken } from "../helpers/axios";
import { types } from "../types";

/**
 *
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
 * 
 * @returns Activar un periodo
 */
export const activatePeriod = (period) => {
  return async (dispatch) => {
    try {
      const res = await clienteAxiosToken.post(`/periods/activate/${period._id}`);
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
