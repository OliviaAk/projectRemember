import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiServer } from "../services/api";


export const loginAdmin = createAsyncThunk("auth/login", async (userCredentials) => {
  const data = await apiServer.post(`admin/login`, userCredentials);
  return data;
});
