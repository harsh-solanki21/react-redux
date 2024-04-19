import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL: string = "https://fakestoreapi.com/users";

export interface User {
  id: number;
  email: string;
  username: string;
  phone: string;
}

interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(BASE_URL);
  return response?.data;
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (initialUser: User) => {
    const { id } = initialUser;
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      if (response?.status === 200) {
        return initialUser;
      }
      return `${response.status} : ${response.statusText}`;
    } catch (error: any) {
      return error.message;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred!";
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        const id: number = action.payload.id;
        if (!id) {
          return;
        }

        const newUsers: User[] = state.users.filter(
          (user: User) => user.id !== id
        );
        state.users = newUsers;
      });
  },
});

export default userSlice.reducer;
