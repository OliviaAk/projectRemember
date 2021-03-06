import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getHero = createAsyncThunk("hero", async ({id}) => {
  const { data } = await axios.get(`https://mogilev-library-remember.azurewebsites.net/heroes/hero/?id=${id}`);
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
  const {data} = await axios.post('https://mogilev-library-remember.azurewebsites.net/add',hero)
  return data
})
export const userHero = createAsyncThunk('heroUserGet',async()=>{
  const {data}= await axios.get(`https://mogilev-library-remember.azurewebsites.net/add`)
  return data
})

export const setPublishCards = createAsyncThunk("publish", async ({ id, isShow }) => {
  const { data } = await axios.patch(`https://mogilev-library-remember.azurewebsites.net/add/${id}`, { isShow });
  return data;
});

export const deleteCard = createAsyncThunk("delete", async ( {id} ) => {
  const { data } = await axios.delete(`https://mogilev-library-remember.azurewebsites.net/add/${id}`);
  return data;
});
