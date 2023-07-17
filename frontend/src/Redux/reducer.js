import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

const initiaState = {
  data: [],
  isLoading: false,
  isError: true,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case GET_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
