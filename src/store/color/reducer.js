import { CHANGE_COLOR, UPDATE_COLOR_MODAL_STYLE,SET_COLOR_TRIGGER_ID } from "./action"

let initialState = {
  triggerId: "",
  color: "",
  style: {
    display: "none",
    left: 0,
    bottom: 0
  }
}

const colorReducer = (state = initialState, action) => {
  let copyState = Object.assign({}, state)
  switch (action.type) {
    case CHANGE_COLOR:
      copyState["color"] = action.color
      return Object.assign({}, state, copyState)

    case UPDATE_COLOR_MODAL_STYLE:
      copyState.style = Object.assign({}, copyState.style, action.style)
      return Object.assign({}, state, copyState)

    case SET_COLOR_TRIGGER_ID:
      copyState["triggerId"] = action.id
      return Object.assign({}, state, copyState)
    default:
      return state;
  }

}

export default colorReducer