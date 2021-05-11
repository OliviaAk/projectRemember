import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dashboard from './reducers/dashboardReducer';
import authentication from './reducers/authReducer';
import cardsTape from './reducers/cardsReducer';
import Interceptor from '../services/api/interceptor';
import quiz from './reducers/quizReducer';

const getStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      dashboard,
      authentication,
      cardsTape,
      quiz,
    }),
  });
  return store;
};
const store = getStore();
Interceptor.setInterceptors(store);
export default store;
