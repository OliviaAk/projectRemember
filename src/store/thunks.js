import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiServer } from '../services/api';

export const loginAdmin = createAsyncThunk('auth/login', async (userCredentials) => {
  const { data } = await apiServer.post(`admin/`, userCredentials);
  return data;
});

export const getCards = createAsyncThunk(`cards`, async () => {
  const { data } = await apiServer.get(`cards/info`);
  return data;
});
export const getHeroes = createAsyncThunk(`heroes`, async () => {
  const { data } = await apiServer.get(`dashboard`);
  return data;
});
export const getPublishCards = createAsyncThunk(`cards publish`, async () => {
  const { data } = await apiServer.get(`cards/publish`);
  return data;
});

export const createCard = createAsyncThunk(`create card`, async (card) => {
  const { data } = await apiServer.post(`cards/info`, card);
  return data;
});
export const createHero = createAsyncThunk(`create hero`, async (hero) => {
  const { data } = await apiServer.post(`dashboard/info`, hero);
  return data;
});

export const getUser = createAsyncThunk('user', async () => {
  const { data } = await apiServer.get(`user/`);
  return data;
});

export const getUsers = createAsyncThunk('users all', async () => {
  const { data } = await apiServer.get(`user/all`);
  return data;
});

export const setPublishCard = createAsyncThunk(
  'favoriteCards',
  async ({ id, isPublish }) => {
    const { data } = await apiServer.patch(`cards/info/${id}`, { isPublish });
    return data;
  }
);
