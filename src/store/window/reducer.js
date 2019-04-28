import {
  ADD_WIDGET,
  REMOVE_WIDGET,
  UPDATE_WIDGET_POSITION,
  UPDATE_WIDGET_SIZE,
  SET_ACTIVE_WIDGET_ID,
} from "./action";

let initialState = {
  width: 1600,
  height: 900,
  name: "可视化",
  background: "",
  activeWidgetId: "",
  widgets: {
    yfy6657uhyhgt88: {
      id: "yfy6657uhyhgt88",
      name: "柱状图",
      type: "bar",
      left: 50,
      top: 50,
      width: 400,
      height: 350
    }
  }
};

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return Object.assign({}, state, {
        widgets: Object.assign({}, state.widgets, {
          [action.widget.id]: action.widget
        })
      });
    case REMOVE_WIDGET:
      state.widgets.delete(action.widgetId);
      return state;
    case UPDATE_WIDGET_POSITION:
      return Object.assign({}, state, {
        widgets: {
          [action.widgetId]: Object.assign(
            {},
            widgets[action.widgetId],
            action.position
          )
        }
      });
    case UPDATE_WIDGET_SIZE:
      return Object.assign({}, state, {
        widgets: {
          [action.widgetId]: Object.assign(
            {},
            widgets[action.widgetId],
            action.size
          )
        }
      });
    case SET_ACTIVE_WIDGET_ID:
      return Object.assign({}, state, {
        activeWidgetId: action.widgetId
      });
    default:
      return state;
  }
};

export default windowReducer;
