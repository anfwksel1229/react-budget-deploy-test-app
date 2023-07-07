import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ hendleDelete, expenses, hendleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((i) => {
          return (
            <ExpenseItem
              expense={i}
              key={i.id}
              hendleDelete={hendleDelete}
              hendleEdit={hendleEdit}
            />
          )
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  )
}

export default ExpenseList
