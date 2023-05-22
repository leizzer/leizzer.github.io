import React, { useState } from 'react'
import _ from 'lodash'
import Canvas from 'components/Canvas'
import Item, { Ghost } from 'components/Item'
import ToolBar from 'components/ToolBar'
import { useSelector } from 'app/hook'
import type { Item as ItemType } from 'store/slices/board'
import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core'

const Board: React.FC = () => {
  const [isDropped, setIsDropped] = useState<boolean>(false)
  const [activeId, setActiveId]: [any, any] = useState(0)
  const selectedTool = useSelector((state) => state.application.selectedTool)
  const items: Record<string, ItemType> = useSelector(
    (state) => state.board.items
  )

  const handleDragEnd = (event: DragEndEvent): void => {
    console.log(isDropped)
    setActiveId(null)
    if (event.over != null && event.over.id === 'canvas') {
      setIsDropped(true)
    }
  }

  const handleDragStart = (event: DragStartEvent): void => {
    console.log(activeId)
    setActiveId(event.active.id)
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <ToolBar />
      <DragOverlay></DragOverlay>
      <Ghost key="ghost" kind={selectedTool} />
      <Canvas>
        {_.values(items).map((item) => (
          <Item key={item.key} item={item}></Item>
        ))}
      </Canvas>
    </DndContext>
  )
}

export default Board
