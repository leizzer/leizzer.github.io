import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'app/hook'
import { select } from 'store/slices/application'
import { Circle, Square, Triangle } from 'components/figures'

const ToolBar: React.FC = () => {
  const figureName = useSelector(state => state.application.figureName)
  const dispatch = useDispatch()

  useEffect(() => { console.log(figureName) }, [figureName])

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <Circle onClick={() => dispatch(select('circle'))}/>
      <Square/>
      <Triangle/>
    </div>
  )
}

export default ToolBar
