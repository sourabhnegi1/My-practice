import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  color:"",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateValue,
  reducers: {
    themetextcolor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {themetextcolor} = themeSlice.actions

export default themeSlice.reducer