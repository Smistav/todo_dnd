import React from 'react'
import s from './input.module.scss'

const Input = ({ handleChange, handleSubmit, value, error }) => {
  return (
    <div className={s.input}>
      <form type='submit' className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputBlock}>
          <input
            className={s.enter}
            value={value}
            onChange={handleChange}
            id='subject'
            type='text'
          />
        </div>
        <button className={s.button}>Отправить</button>
      </form>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}
export default Input
