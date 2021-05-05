import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setOAuthTokenGoogle } from '../../store/actions';

export default function GoogleSignIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => {
    if (!token) {
      history.push('/');
    } else {
      dispatch(setOAuthTokenGoogle(token));
      history.push('/');
      Cookies.remove('token');
    }
  }, [dispatch, history, token]);

  return <></>;
}
