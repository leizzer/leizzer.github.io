import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const Square: React.FC = () => {
  const theme = useTheme()

  return (
    <svg {...theme?.svgTool}>
      <rect width="100" height="100" {...theme?.toolStyle} />
    </svg>
  )
}

export default memo(Square)
