import axios from 'axios';
import { GET_DASHBOARD, DASHBOARD_LOADING, GET_ERRORS, CLEAR_CURRENT_DASHBOARD } from './types';

export const getCurrentDashboard = () => dispatch => {
  dispatch(setDashboardLoading());
  axios.get('/api/current')
    .then(res => dispatch({
      type: GET_DASHBOARD,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_DASHBOARD,
        payload: {}
      }))
}

export const setDashboardLoading = () => {
  return {
    type: DASHBOARD_LOADING
  }
}

export const clearCurrentDashboard = () => {
  return {
    type: CLEAR_CURRENT_DASHBOARD
  }
}