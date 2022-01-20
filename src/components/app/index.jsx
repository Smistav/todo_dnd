import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import s from './app.module.scss'
import '@atlaskit/css-reset'
import Column from '../column'
import initData from '../../initData'
import { onDragEnd } from './part/onDragEnd'
import Input from '../input'
const App = () => {
  const [data, setData] = useState(initData)
  const [error, setError] = useState(null)
  const [value, setValue] = useState('')

  const handleChange = (evt) => {
    const value = evt.target.value
    setValue(value)
    if (value) {
      setError(null)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      const columns = data.columns
      columns[0].tasks.push({ id: Date.now(), content: value })
      setData({ ...data, columns })
      setValue('')
    } else {
      setError('Введите что-нибудь')
    }
  }
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(data, setData, result)}>
      <div className={s.component}>
        <Input
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}
          error={error}
        />
        <div className={s.columns}>
          {data.columns.map((column, index) => (
            <Column key={index} column={column} />
          ))}
        </div>
      </div>
    </DragDropContext>
  )
}
export default App
