import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setOAuthToken } from '../../store/actions';

export default function FacebookSignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      history.push('/');
    } else {
      dispatch(setOAuthToken(token));
      history.push('/');
      Cookies.remove('token');
    }
  }, [dispatch, history, token]);

  return <></>;
}
