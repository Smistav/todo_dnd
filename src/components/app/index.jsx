import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import s from './app.module.scss'
import '@atlaskit/css-reset'
import Column from '../column'
import initData from '../../initData'
import { onDragEnd } from './part/onDragEnd'
const App = () => {
  const [data, setData] = useState(initData)

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(data, setData, result)}>
      <div className={s.container}>
        {data.columns.map((column, index) => (
          <Column key={index} column={column} />
        ))}
      </div>
    </DragDropContext>
  )
}
export default App
