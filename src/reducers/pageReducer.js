import {
  NEXT_PAGE,
  FIRST_PAGE,
  PREVIOUS_PAGE,
  LAST_PAGE
} from "../actions/actionTypes";
const defaultState = {
  currentPageNumber: 1
};

const PageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      const firstPageState = {
        ...state,
        currentPageNumber: 1
      };
      console.log("status: ", { oldState: state, newState: firstPageState });
      return firstPageState;
    case PREVIOUS_PAGE:
        const previousPage = state.currentPageNumber - action.payload;
        if(previousPage != 0) {
            const previousPageState = {
                ...state,
                currentPageNumber: previousPage
            };
            console.log("status: ", { oldState: state, newState: previousPageState });
            return previousPageState;
        }
        return state;
    case NEXT_PAGE:
      const nextPageState = {
        ...state,
        currentPageNumber: state.currentPageNumber + action.payload
      };
      console.log("status: ", { oldState: state, newState: nextPageState });
      return nextPageState;
    case LAST_PAGE:
      const lastPageState = {
        ...state,
        currentPageNumber: action.payload
      };
      console.log("status: ", { oldState: state, newState: lastPageState });
      return lastPageState;
    default:
      return state;
  }
};

export default PageReducer;
