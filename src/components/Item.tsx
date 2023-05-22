import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Circle, Square, Triangle } from './figures'
import type { Item as ItemType } from 'store/slices/board'

interface Props extends React.PropsWithChildren {
  element?: React.ElementType | null
  item?: ItemType
  kind?: string | null
}

const Item: React.FC<Props> = (props) => {
  const Element = props.element != null ? props.element : 'div'
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'uniqueid',
  })

  console.log(transform)
  const style =
    transform != null
      ? {
          transform: CSS.Translate.toString(transform),
        }
      : undefined

  const displayChildren = (): React.ReactNode => {
    let result = props.children
    const kind = props.item?.kind ?? props.kind

    switch (kind) {
      case 'circle':
        result = <Circle />
        break
      case 'square':
        result = <Square />
        break
      case 'triangle':
        result = <Triangle />
        break
    }

    return result
  }

  return (
    <Element ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {displayChildren()}
    </Element>
  )
}

interface GhostProps {
  kind: string | null
}

export const Ghost: React.FC<GhostProps> = ({ kind }) => {
  return <Item kind={kind}> </Item>
}

export default Item
