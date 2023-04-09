import { createStore } from "redux";

const initialState = {
  captions: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CAPTION":
      return {
        captions: [...state.captions, action.payload],
      };
    case "EDIT_CAPTION":
      return {
        captions: state.captions.map((caption) =>
          caption.id === action.payload.id ? action.payload : caption
        ),
      };
    case "DELETE_CAPTION":
      return {
        captions: state.captions.filter(
          (caption) => caption.id !== action.payload
        ),
      };
    case "REMOVE_ALL":
      return {
        captions: [],
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;