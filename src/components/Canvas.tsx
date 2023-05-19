import React from 'react'
import { useDroppable } from '@dnd-kit/core'

const Canvas: React.FC<React.PropsWithChildren> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'canvas',
  })

  return (
    <div
      ref={setNodeRef}
      style={{
        height: 500,
        width: 500,
        display: 'block',
        backgroundColor: 'lightcyan',
        color: isOver ? 'green' : 'black',
      }}
    >
      AAAAAH
      {props.children}
    </div>
  )
}

export default Canvas
