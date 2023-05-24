import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import styled from 'styled-components'

const CanvasWrap = styled.div`
  height: 80%;
  width: 80%;
  display: block;
  position: absolute;
  top: 10%;
  left: 10%;
  border-color: darkgray;
  border-style: solid;
  border-width: 2px;
  background-color: white;
`

const Canvas: React.FC<React.PropsWithChildren> = (props) => {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  })

  return <CanvasWrap ref={setNodeRef}>{props.children}</CanvasWrap>
}

export default Canvas
