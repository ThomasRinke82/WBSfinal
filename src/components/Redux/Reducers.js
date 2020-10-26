import { SET_BACKGROUND_IMG } from "./ActionsTypes";

const initialState = {
  backgroundImageData: "",
};

export default function StateUpdater(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUND_IMG:
      return { ...state, backgroundImageData: action.imgData };
    default:
      return state;
  }
}
