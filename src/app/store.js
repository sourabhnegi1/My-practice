import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../feactures/counter/CountSlice'
import themeReducer from '../feactures/theme/ThemeSlice'
export const store = configureStore({
  reducer: {
      counter: countReducer,
      theme:themeReducer
  },
})