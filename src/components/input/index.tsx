import React from 'react'
import s from './input.module.scss'
interface InputProps {
  handleChange(evt: React.ChangeEvent<HTMLInputElement>): void
  handleSubmit(evt: React.SyntheticEvent<HTMLFormElement>): void
  value: string
  error: string
}
const Input: React.FC<InputProps> = ({ handleChange, handleSubmit, value, error }) => {
  return (
    <div className={s.input}>
      <form className={s.form} onSubmit={handleSubmit}>
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
