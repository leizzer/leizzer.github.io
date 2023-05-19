import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ApplicationState {
  selectedTool: string | null
}

const initialState: ApplicationState = { selectedTool: null }

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string | null>) => {
      state.selectedTool = action.payload
    },
    unselect: (state) => {
      state.selectedTool = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { select, unselect } = applicationSlice.actions

export default applicationSlice.reducer
