import { SET_SORT_BY } from "../actions";

export default function sortByReducer(state = "date", action) {
  switch (action.type) {
    case SET_SORT_BY: {
      if (action.sortBy !== "date" && action.sortBy !== "score") {
        return state;
      }
      return action.sortBy;
    }
    default:
      return state;
  }
}
