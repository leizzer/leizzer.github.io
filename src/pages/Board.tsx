/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import _ from 'lodash'
import Canvas from 'components/Canvas'
import Item, { Ghost } from 'components/Item'
import ToolBar from 'components/ToolBar'
import { useSelector, useDispatch } from 'app/hook'
import { select, unselect } from 'store/slices/application'
import {
  addItem,
  moveItem,
  type ItemRecord,
  type Item as ItemType,
} from 'store/slices/board'
import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'

const Board: React.FC = () => {
  const dispatch = useDispatch()
  const { selectedItemKind, selectedItemId } = useSelector(
    (state) => state.application
  )
  const items: Record<string, ItemType> = useSelector(
    (state) => state.board.items
  )

  const handleDragEnd = (event: DragEndEvent): void => {
    if (event.over != null && event.over.id === 'canvas') {
      const act = event.activatorEvent as PointerEvent
      const canvas = event.over

      if (selectedItemId !== null && selectedItemId !== undefined) {
        const id: number = selectedItemId
        const item = items[id] as ItemRecord

        dispatch(
          moveItem({
            ...item,
            x: item.x + event.delta.x,
            y: item.y + event.delta.y,
          })
        )
      } else {
        dispatch(
          addItem({
            kind: selectedItemKind as string,
            x: act.x + event.delta.x - act.offsetX - canvas.rect.left,
            y: act.y + event.delta.y - act.offsetY - canvas.rect.top,
            z: 10,
          })
        )
      }
    }

    dispatch(unselect())
  }

  const handleDragStart = (event: DragStartEvent): void => {
    const data = event.active.data.current

    if (data?.tool === true) {
      dispatch(select({ selectedItemKind: data?.kind }))
    } else {
      dispatch(
        select({
          selectedItemKind: data?.kind,
          selectedItemId: data?.id,
        })
      )
    }
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToWindowEdges]}
    >
      <ToolBar />
      <DragOverlay dropAnimation={null}>
        <Ghost key="ghost" kind={selectedItemKind} />
      </DragOverlay>

      <Canvas>
        {_.values(items).map((item) => (
          <Item key={item.key} item={item}></Item>
        ))}
      </Canvas>
    </DndContext>
  )
}

export default Board
