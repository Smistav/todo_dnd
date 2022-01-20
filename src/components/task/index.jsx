import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import s from './task.module.scss'
import cn from 'classnames'

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={cn(s.component, { [s.active]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  )
}
export default Task
