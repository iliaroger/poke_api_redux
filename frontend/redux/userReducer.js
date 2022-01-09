import { createSlice } from '@reduxjs/toolkit';

const userState = {
  email: 'admin@admin.com',
  password: 'admin',
  username: 'General Admin',
};

export const userSlice = createSlice({
  name: 'user',
  userState,
  initialState: userState,
  reducers: {
    changeUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUserName } = userSlice.actions;

export default userSlice.reducer;
