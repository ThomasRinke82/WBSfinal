import {
  SET_BACKGROUND_IMG,
  SET_TEMPLATE,
  SET_TEAMNAME,
  SET_SCORE,
  SET_CLUBICON,
  SET_LEAGUE,
  SET_MATCHDAY,
  SET_LOCATION,
  SET_DELETE,
  SET_PERSONNAME,
  SET_QUOTE,
  SET_ACTIVETEMPLATE,
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

export const setLeague = (textValue, inputName) => {
  return {
    type: SET_LEAGUE,
    payload: { textValue, inputName },
  };
};

export const setMatchday = (textValue, inputName) => {
  return {
    type: SET_MATCHDAY,
    payload: { textValue, inputName },
  };
};

export const setLocation = (textValue, inputName) => {
  return {
    type: SET_LOCATION,
    payload: { textValue, inputName },
  };
};

export const setDelete = () => {
  return {
    type: SET_DELETE,
  };
};

export const setPersonName = (personName) => {
  return {
    type: SET_PERSONNAME,
    personName: personName,
  };
};

export const setQuote = (quote) => {
  return {
    type: SET_QUOTE,
    quote: quote,
  };
};

export const setActiveTemplate = (activeTemplate) => {
  return {
    type: SET_ACTIVETEMPLATE,
    activeTemplate: activeTemplate,
  };
};
