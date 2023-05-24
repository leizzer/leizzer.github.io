import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

export interface Item {
  id?: number
  key?: string
  kind: string
  x: number
  y: number
  z: number
}

export interface ItemRecord extends Omit<Item, 'id' | 'key'> {
  id: number
  key: string
}

interface BoardState {
  items: Record<string, ItemRecord>
}

const initialState: BoardState = { items: {} }

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      let { id, key, kind } = action.payload

      if (id == null) {
        // TODO: `last` might not be always in the same order
        // I use `last` instead of length for when `delete` feature is implemented
        const last = _.last(_.values(state.items))
        id = last != null ? last.id + 1 : 1
      }

      key = key ?? `${kind}-${id}`

      const newRecord: Record<string, ItemRecord> = {
        [id]: {
          ...action.payload,
          id,
          key,
        },
      }

      state.items = { ...state.items, ...newRecord }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = _.omit(state.items, [action.payload])
    },
    moveItem: (state, action: PayloadAction<ItemRecord>) => {
      state.items = { ...state.items, [action.payload.id]: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, moveItem } = boardSlice.actions

export default boardSlice.reducer
