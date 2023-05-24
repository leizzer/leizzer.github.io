import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ApplicationState {
  selectedItemId?: number | null
  selectedItemKind: string | null
}

const initialState: ApplicationState = {
  selectedItemKind: null,
  selectedItemId: null,
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<ApplicationState>) => action.payload,
    unselect: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { select, unselect } = applicationSlice.actions

export default applicationSlice.reducer
