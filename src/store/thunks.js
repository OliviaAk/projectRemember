import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeroes = createAsyncThunk("heroes", async () => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/auth/heroAdd`);
  return data;
});


export const getHero = createAsyncThunk("hero", async ({id}) => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/heroes/hero/?id=${id}`);
  return data;
});

export const getHeroByName = createAsyncThunk("hero", async ({name}) => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/search?lastName=${name}`);
  return data;
});

export const getHistory = createAsyncThunk("history", async () => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/history`);
  return data;
});
export const getHistoryByDate = createAsyncThunk("historyBy", async ({id}) => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/history?id=${id}`);
  return data;
});
export const createNewHero = createAsyncThunk('heroUser', async (hero)=>{
  const {data} = await axios.post('https://mogilev-library-remember.azurewebsites.net/auth/heroAdd',hero)
  return data
})