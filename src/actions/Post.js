export const GET_POST_BY_POST_ID = "GET_POST_BY_POST_ID";
export const GET_POST_BY_POST_ID_SUCCESS = "GET_POST_BY_POST_ID_SUCCESS";
export const GET_POST_BY_POST_ID_FAIL = "GET_POST_BY_POST_ID_FAIL";

export const getPostByPostId = (id) => ({
  type: GET_POST_BY_POST_ID,
  id,
});
