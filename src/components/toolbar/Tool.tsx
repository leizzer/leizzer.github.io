import React from 'react'
import styled from 'styled-components'
import { Circle, Square, Triangle } from 'components/figures'
import { useSelector, useDispatch } from 'app/hook'
import { select } from 'store/slices/application'

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

  return (
    <ToolWrap
      key={type}
      id={type}
      selected={selectedTool === type}
      onClick={() => dispatch(select(type))}
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
