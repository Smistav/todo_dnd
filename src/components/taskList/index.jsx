import React from 'react'
import Task from '../task'
import s from './taskList.module.scss'
import cn from 'classnames'

const TaskList = ({ provided, snapshot, tasks }) => {
  const classComponent = cn(s.component, { [s.active]: snapshot.isDraggingOver })
  return (
    <div
      className={classComponent}
      {...provided.droppableProps}
      ref={provided.innerRef}
      //   {...snapshot.isDraggingOver}
    >
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  )
}
export default TaskList
