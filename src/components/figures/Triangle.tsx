import React, { memo } from 'react'

const Triangle: React.FC = () => (
  <svg>
    <polygon
      points="50 15, 100 100, 0 100"
      fill="lime"
      stroke="purple"
      strokeWidth="1"
    />
  </svg>
)

export default memo(Triangle)
