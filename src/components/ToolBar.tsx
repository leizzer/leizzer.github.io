import React from 'react'
import { Circle, Square, Triangle } from 'components/figures'

const ToolBar: React.FC = () => <div style={{ backgroundColor: 'gray' }}>
  <Circle/>
  <Square/>
  <Triangle/>
</div>

export default ToolBar
