import React, { memo } from 'react'

const Square: React.FC = () => (
  <svg>
    <rect width="100" height="100" fill="rgb(0,0,255)" strokeWidth="3" stroke="rgb(0,0,0)" />
  </svg>
)

export default memo(Square)
