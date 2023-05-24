import React from 'react'
import styled from 'styled-components'
import { CircleTool, SquareTool, TriangleTool } from 'components/toolbar/Tool'

const Tools = styled.div`
  background-color: ${({ theme }) => theme.gray};
  width: ${({ theme }) => theme.svgTool.width};
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
`

const ToolBar: React.FC = () => {
  return (
    <Tools>
      <CircleTool />
      <SquareTool />
      <TriangleTool />
    </Tools>
  )
}

export default ToolBar
