import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ApplicationState {
  figureName: string | null
}

const initialState: ApplicationState = { figureName: null }

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string | null>) => {
      state.figureName = action.payload
    },
    unselect: state => {
      state.figureName = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { select, unselect } = applicationSlice.actions

export default applicationSlice.reducer
