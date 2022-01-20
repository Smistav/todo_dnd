import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import s from './app.module.scss'
import '@atlaskit/css-reset'
import Column from '../column'
import initData from '../../initData'

const App = () => {
  const [data, setData] = useState(initData)
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    const column = data.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }
    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    })
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.container}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </div>
    </DragDropContext>
  )
}

export default App
