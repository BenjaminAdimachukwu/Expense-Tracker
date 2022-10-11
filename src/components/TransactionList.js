/* eslint-disable no-unused-vars */
import React, { useContext }from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transactions } from "./Transactions";
export const TransactionList = () => {
const {transactions} = useContext(GlobalContext)
console.log(transactions)
  return (
    <>
         <h3>History</h3>
      <ul  className="list">
         {transactions.map(transaction =>(<Transactions Key ={transaction.id}transaction ={transaction}/> ))}
         
      </ul>
    </>
  )
}
