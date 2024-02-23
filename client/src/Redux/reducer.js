import { GET_PUBLICATIONS } from "./action";

const initialState = {
  publications: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return { ...state, publications: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
