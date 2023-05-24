import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import styled, { useTheme } from 'styled-components'
import { Circle, Square, Triangle } from 'components/figures'
import { useSelector } from 'app/hook'

type Tools = Record<string, React.ReactElement>

const tools: Tools = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
}

interface ToolProps {
  selected: boolean
}

const ToolWrap = styled.div<ToolProps>`
  display: inline-block;
  background-color: ${({ selected, theme }) =>
    selected ? theme.tertiary : 'none'}};
`

interface Props {
  kind: string
}

const Tool: React.FC<Props> = ({ kind }) => {
  const theme = useTheme()
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: kind,
    data: { kind, tool: true },
  })
  const selectedTool = useSelector(
    (state) => state.application.selectedItemKind
  )

  return (
    <ToolWrap key={kind} selected={selectedTool === kind}>
      <div
        id={kind}
        ref={setNodeRef}
        {...theme?.svgTool}
        {...listeners}
        {...attributes}
      >
        {tools[kind]}
      </div>
    </ToolWrap>
  )
}

export const CircleTool: React.FC = () => <Tool kind="circle" />
export const SquareTool: React.FC = () => <Tool kind="square" />
export const TriangleTool: React.FC = () => <Tool kind="triangle" />

export default Tool
