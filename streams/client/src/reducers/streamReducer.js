import { omit, mapKeys } from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAMS":
      return { ...state, ...mapKeys(action.payload, "id") };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return omit(state.action.payload);
    default:
      return state;
  }
};
