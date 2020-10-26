import { SET_BACKGROUND_IMG } from "./ActionsTypes";

export const setBackgroundImg = (imgData) => {
  return {
    type: SET_BACKGROUND_IMG,
    imgData: imgData,
  };
};
