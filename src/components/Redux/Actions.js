import {
  SET_BACKGROUND_IMG,
  SET_TEMPLATE,
  SET_TEAMNAME,
  SET_SCORE,
  SET_CLUBICON,
  SET_FILEURL,
} from "./ActionsTypes";

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

export const setTeamName = (textValue, inputName) => {
  return {
    type: SET_TEAMNAME,
    payload: { textValue, inputName },
  };
};

export const setScore = (textValue, inputName) => {
  return {
    type: SET_SCORE,
    payload: { textValue, inputName },
  };
};

export const setClubIcon = (imgData, inputName) => {
  return {
    type: SET_CLUBICON,
    payload: { imgData, inputName },
  };
};

export const setFileUrl = (fileUrl) => {
  return {
    type: SET_FILEURL,
    fileUrl: fileUrl,
  };
};
