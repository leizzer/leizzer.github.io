import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const Triangle: React.FC = () => {
  const theme = useTheme()

  return (
    <svg {...theme?.svgTool}>
      <polygon points="50 0, 100 100, 0 100" {...theme?.toolStyle} />
    </svg>
  )
}

export default memo(Triangle)
