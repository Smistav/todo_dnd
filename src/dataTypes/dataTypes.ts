export type TaskTypes = {
  id: number
  content: string
}
export type ColumnType = {
  id: number
  title: string
  tasks: TaskTypes[]
}
export interface DataTypes {
  columns: ColumnType[]
}
type Id = string
type DroppableId = Id
type DraggableId = Id
type TypeId = Id
type DraggableLocation = {
  droppableId: DroppableId
  index: number
}
export type DropResult = {
  draggableId: DraggableId
  type: TypeId
  source: DraggableLocation
  destination?: DraggableLocation
}
