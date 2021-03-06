import {
  GET_POST_BY_POST_ID_SUCCESS,
  GET_POST_BY_POST_ID_FAIL,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST_SUCCESS,
} from "../actions";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case UPVOTE_TO_POST_SUCCESS:
    case DOWNVOTE_TO_POST_SUCCESS:
    case GET_POST_BY_POST_ID_SUCCESS:
    case GET_POST_BY_POST_ID_FAIL: {
      return { ...action.post };
    }
    default:
      return state;
  }
}
