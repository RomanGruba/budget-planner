import { combineReducers } from "redux";
import Type from "../redux/actionTypes";

const initialState = { value: 0, balance: 0 };

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.ADD_BALANCE:
      return payload;
    default:
      return state;
  }
};

const balanceReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.SAVE_BALANCE:
      return;
    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  balance: balanceReducer
});

// const budgetFormReducer = (state = 0, action) => {
//   switch (action.type) {
//     case Type.ADD_BALANCE:
//       return action.payload;
//     case Type.SAVE_BALANCE:
//       return;
//     default:
//       return state;
//   }
// };

// export default budgetFormReducer;
