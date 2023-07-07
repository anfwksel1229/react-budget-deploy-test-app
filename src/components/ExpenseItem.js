import React from 'react'
import './ExpenseItem.css'
import { MdEdit, MdDelete } from 'react-icons/md'

const ExpenseItem = ({ expense, hendleDelete, hendleEdit }) => {
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{expense.charge}</span>
          <span className="amount">{expense.amount}</span>
        </div>
        <div>
          <button className="edit-btn" onClick={() => hendleEdit(expense.id)}>
            <MdEdit />
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              hendleDelete(expense.id)
            }}
          >
            <MdDelete />
          </button>
        </div>
      </li>
    </>
  )
}

export default ExpenseItem
