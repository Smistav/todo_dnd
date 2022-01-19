import React from 'react'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
const Container = styled.div`
  border: 1px solid rgb(117, 116, 116);
  border-radius: 2px;
  margin: 8px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`
const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}
export default Column
