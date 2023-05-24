import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const Circle: React.FC = () => {
  const theme = useTheme()

  return (
    <svg {...theme?.svgTool}>
      <circle cx="50" cy="50" r="50" {...theme?.toolStyle} />
    </svg>
  )
}

export default memo(Circle)
