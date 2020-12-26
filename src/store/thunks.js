import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeroes = createAsyncThunk("heroes", async () => {
  const { data } = await axios.get(`http://localhost:5000/heroes`);
  return data;
});

