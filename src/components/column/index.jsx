import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import s from './column.module.scss'
import TaskList from '../taskList'

const Column = ({ column }) => {
  return (
    <div className={s.component}>
      <div className={s.title}>{`${column.title}(${column.tasks.length})`}</div>
      <Droppable droppableId={String(column.id)}>
        {(provided, snapshot) => (
          <TaskList
            provided={provided}
            snapshot={snapshot}
            tasks={column.tasks}
            columnId={column.id}
          />
        )}
      </Droppable>
    </div>
  )
}
export default Column
