import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import s from './task.module.scss'
import cn from 'classnames'

const Task = ({ task, index, columnId }) => {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          className={cn(s.component, {
            [s.active]: snapshot.isDragging && columnId === 0,
            [s.active1]: snapshot.isDragging && columnId === 1,
            [s.active2]: snapshot.isDragging && columnId === 2,
          })}
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
