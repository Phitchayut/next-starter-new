import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as user from '@/services/users/users.service';
import { RootState } from '../store';
import { Users } from '@/models/users/user.model';

interface masterState {
  users: Users[];
  user: Users;
  page: number;
  loading: boolean;
}

const initialState: masterState = {
  users: [],
  user: {} as Users,
  page: 1,
  loading: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await user.getUsers();
  return response;
});
export const fetchUser = createAsyncThunk('users/fetchUser', async (idUser: number) => {
  const response = await user.getUser(idUser);
  return response;
});
export const createUser = createAsyncThunk(
  'users/createUser',
  async (data: Users) => {
    const response = await user.createUser(data);
    return response;
  }
);
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (mergeData: Users) => {
    const response = await user.updateUser(mergeData);
    return response;
  }
);
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number) => {
    const response = await user.deleteUser(id);
    return response;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: masterState) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state: masterState, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: masterState) => {
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state: masterState) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state: masterState, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state: masterState) => {
        state.loading = false;
      })
      .addCase(createUser.pending, (state: masterState) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state: masterState, action) => {
        state.loading = false;
      })
      .addCase(createUser.rejected, (state: masterState) => {
        state.loading = false;
      })
      .addCase(updateUser.pending, (state: masterState) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state: masterState, action) => {
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state: masterState) => {
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state: masterState) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state: masterState, action) => {
        console.log(action);
        
        state.users = state.users.filter((user) => user.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state: masterState) => {
        state.loading = false;
      });
  },
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userReducer;
