import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

interface Item {
  id: string
  key: string
  kind: string
  x: number
  y: number
  z: number
}

interface BoardState {
  items: Record<string, Item>
}

const initialState: BoardState = { items: {} }

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = { ...state.items, [action.payload.key]: action.payload }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = _.omit(state.items, [action.payload])
    },
    moveItem: (state, action: PayloadAction<Item>) => {
      state.items = { ...state.items, [action.payload.key]: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, moveItem } = applicationSlice.actions

export default applicationSlice.reducer
