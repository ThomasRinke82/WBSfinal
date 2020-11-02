import {
  SET_BACKGROUND_IMG,
  SET_TEMPLATE,
  SET_TEAMNAME,
  SET_SCORE,
  SET_CLUBICON,
  SET_DELETE,
} from "./ActionsTypes";

const initialState = {
  backgroundImageData: "",
  templateData: "",
  teamHome: "",
  teamAway: "",
  scoreHome: "",
  scoreAway: "",
  iconHome: "",
  iconAway: "",
  updated: false,
};

export default function StateUpdater(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUND_IMG:
      return { ...state, updated: true, backgroundImageData: action.imgData };
    case SET_TEMPLATE:
      return { ...state, updated: true, templateData: action.imgData };
    case SET_TEAMNAME:
      return {
        ...state,
        updated: true,
        teamHome:
          action.payload.inputName === "team-home"
            ? action.payload.textValue
            : state.teamHome,
        teamAway:
          action.payload.inputName === "team-away"
            ? action.payload.textValue
            : state.teamAway,
      };
    case SET_SCORE:
      return {
        ...state,
        updated: true,
        scoreHome:
          action.payload.inputName === "score-home"
            ? action.payload.textValue
            : state.scoreHome,
        scoreAway:
          action.payload.inputName === "score-away"
            ? action.payload.textValue
            : state.scoreAway,
      };
    case SET_CLUBICON:
      return {
        ...state,
        updated: true,
        iconHome:
          action.payload.inputName === "icon-home"
            ? action.payload.imgData
            : state.iconHome,
        iconAway:
          action.payload.inputName === "icon-away"
            ? action.payload.imgData
            : state.iconAway,
      };
    case SET_DELETE:
      return {
        ...state,
        initialState,
      };
    default:
      return state;
  }
}
