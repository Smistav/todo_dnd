import React from 'react'
import Task from '../task'
import s from './taskList.module.scss'
import cn from 'classnames'

const TaskList = ({ provided, snapshot, tasks, columnId }) => {
  const classComponent = cn(s.component, {
    [s.active]: snapshot.isDraggingOver && columnId === 0,
    [s.active1]: snapshot.isDraggingOver && columnId === 1,
    [s.active2]: snapshot.isDraggingOver && columnId === 2,
  })
  return (
    <div
      className={classComponent}
      {...provided.droppableProps}
      ref={provided.innerRef}
      //   {...snapshot.isDraggingOver}
    >
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} columnId={columnId} />
      ))}
      {provided.placeholder}
    </div>
  )
}
export default TaskList
