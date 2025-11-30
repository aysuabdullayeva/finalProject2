import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  person: null,
};

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const { data } = await axios.get(
      "https://691e052bbb52a1db22bcccc3.mockapi.io/searchinput/testsearch"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createUser = createAsyncThunk("createUser", async (newUser) => {
  try {
    const { data } = await axios.post(
      "https://691e052bbb52a1db22bcccc3.mockapi.io/searchinput/testsearch",
      newUser
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPerson: (state, action) => {
      state.person = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users.push(action.payload); 
    });
  },
});

export const { setPerson } = userSlice.actions;
export default userSlice.reducer;
