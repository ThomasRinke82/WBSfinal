import { SET_BACKGROUND_IMG, SET_TEMPLATE } from "./ActionsTypes";

const initialState = {
  backgroundImageData: "",
  templateData: "",
};

export default function StateUpdater(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUND_IMG:
      return { ...state, backgroundImageData: action.imgData };
    case SET_TEMPLATE:
      return { ...state, templateData: action.imgData };
    default:
      return state;
  }
}
