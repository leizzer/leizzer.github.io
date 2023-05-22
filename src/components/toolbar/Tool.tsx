import React from 'react'
import styled from 'styled-components'
import { Circle, Square, Triangle } from 'components/figures'
import { useSelector, useDispatch } from 'app/hook'
import { select } from 'store/slices/application'
import { addItem } from 'store/slices/board'

type Tools = Record<string, React.ReactElement>

const tools: Tools = {
  circle: <Circle />,
  square: <Square />,
  triangle: <Triangle />,
}

interface Props {
  type: string
}

const Tool: React.FC<Props> = ({ type }) => {
  const selectedTool = useSelector((state) => state.application.selectedTool)
  const dispatch = useDispatch()

  const handleClick = (toolName: string): void => {
    dispatch(select(toolName))
    dispatch(
      addItem({
        kind: type,
        x: 0,
        y: 0,
        z: 10,
      })
    )
  }

  return (
    <ToolWrap
      key={type}
      id={type}
      selected={selectedTool === type}
      onClick={() => {
        handleClick(type)
      }}
    >
      {tools[type]}
    </ToolWrap>
  )
}

interface ToolProps {
  id: string
  selected: boolean
}

const ToolWrap = styled.div<ToolProps>`
  background-color: ${(props) => (props.selected ? 'yellow' : 'none')}};
`

export const CircleTool: React.FC = () => <Tool type="circle" />
export const SquareTool: React.FC = () => <Tool type="square" />
export const TriangleTool: React.FC = () => <Tool type="triangle" />

export default Tool
