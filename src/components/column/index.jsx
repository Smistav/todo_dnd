import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import s from './column.module.scss'
import TaskList from '../taskList'

const Column = ({ column, tasks }) => {
  return (
    <div className={s.component}>
      <div className={s.title}>{column.title}</div>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => <TaskList provided={provided} snapshot={snapshot} tasks={tasks} />}
      </Droppable>
    </div>
  )
}
export default Column
