import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: IUserState[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IUserState>) => {
      state.push(action.payload);
    },
    update: (state, action: PayloadAction<IUserState>) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.firstName = action.payload.firstName;
          item.lastName = action.payload.lastName;
          item.email = action.payload.email;
        }
      });
    },
  },
});

export const { add, update } = userSlice.actions;
export default userSlice.reducer;
