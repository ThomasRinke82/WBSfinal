import { SET_BACKGROUND_IMG, SET_TEMPLATE } from "./ActionsTypes";

export const setBackgroundImg = (imgData) => {
  return {
    type: SET_BACKGROUND_IMG,
    imgData: imgData,
  };
};

export const setTemplate = (imgData) => {
  return {
    type: SET_TEMPLATE,
    imgData: imgData,
  };
};
