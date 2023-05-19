import React, { useState } from 'react'
import Canvas from 'components/Canvas'
import Item from 'components/Item'
import ToolBar from 'components/ToolBar'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'

const Board: React.FC = () => {
  const [isDropped, setIsDropped] = useState(false)
  const item = <Item>Drag me</Item>

  const handleDragEnd = (event: DragEndEvent): void => {
    if (event.over != null && event.over.id === 'canvas') {
      setIsDropped(true)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <ToolBar />
      {!isDropped ? item : null}
      <Canvas>{isDropped ? item : 'Drop here'}</Canvas>
    </DndContext>
  )
}

export default Board
