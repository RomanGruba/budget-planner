import Type from "../redux/actionTypes";

export const addBalance = event => ({
  type: Type.ADD_BALANCE,
  payload: event.target.value
});

export const saveBalance = value => ({
  type: Type.SAVE_BALANCE,
  payload: value
});
