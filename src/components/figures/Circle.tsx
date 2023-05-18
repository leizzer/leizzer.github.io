import React, { memo } from 'react'

const Circle = (props: { onClick: () => void }): React.ReactElement => (
  <svg onClick={props.onClick}>
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
  </svg>
)

export default memo(Circle)
