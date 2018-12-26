import { GET_DASHBOARD, DASHBOARD_LOADING, CLEAR_CURRENT_DASHBOARD } from '../actions/types';

const initialState = {
  dashboard: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload,
        loading: false
      }
      case CLEAR_CURRENT_DASHBOARD:
      return {
        ...state,
        dashboard: null
      }
    default:
      return state;
  }
}