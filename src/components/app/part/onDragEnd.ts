import { DataTypes, DropResult } from '../../../dataTypes/dataTypes'

export const onDragEnd = (
  data: DataTypes,
  setData: React.Dispatch<React.SetStateAction<DataTypes>>,
  result: DropResult,
) => {
  const { destination, source, draggableId } = result
  if (!destination) {
    return
  }
  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return
  }
  const start = data.columns[+source.droppableId]
  const finish = data.columns[+destination.droppableId]
  if (start === finish) {
    const newTasks = [...start.tasks]
    const taskIndex = start.tasks.findIndex((item) => item.id === +draggableId)
    newTasks.splice(source.index, 1)
    newTasks.splice(destination.index, 0, start.tasks[taskIndex])
    const newColumn = {
      ...start,
      tasks: newTasks,
    }
    const columns = data.columns
    columns[newColumn.id] = newColumn
    setData({
      ...data,
      columns,
    })
    return
  }
  // move another column
  const startTasks = [...start.tasks]
  startTasks.splice(source.index, 1)
  const newStart = {
    ...start,
    tasks: startTasks,
  }
  const finishTasks = [...finish.tasks]
  const taskIndex = start.tasks.findIndex((item) => item.id === +draggableId)
  finishTasks.splice(destination.index, 0, start.tasks[taskIndex])

  const newFinish = {
    ...finish,
    tasks: finishTasks,
  }
  const columns = data.columns
  columns[newStart.id] = newStart
  columns[newFinish.id] = newFinish

  setData({
    ...data,
    columns,
  })
}
