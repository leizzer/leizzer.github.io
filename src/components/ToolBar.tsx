import React from 'react'
import { CircleTool, SquareTool, TriangleTool } from 'components/toolbar/Tool'

const ToolBar: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <CircleTool />
      <SquareTool />
      <TriangleTool />
    </div>
  )
}

export default ToolBar
