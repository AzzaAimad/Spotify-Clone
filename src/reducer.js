export const initialState = {
  //state // all the state store in reducer and save the change apply to these state
  user: null,
  playlists:[],
  playing: false,
  item: null,
  //REMOVE AFTER FINISHED DEVELOPPING
//token:"BQCNsyDnfxfT4B6wlDji-704IEBgzq0gcLspN0NBSVL_iPbeVx281N5UU4SAGQ4laCShqUR1_ur5oVlWFCQQic46HFLkAD-zn7ta5ArnHWQGyk6DoP7JVvCUvFYQOQtyOfqkYEC7sItTWA9irVlqYijq8c8LnKhW4CS5DyPcxr2TsD30",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return{
        ...state,
        discover_weekly:action.discover_weekly
      }
    default:
      return state;
  }
};

export default reducer;
