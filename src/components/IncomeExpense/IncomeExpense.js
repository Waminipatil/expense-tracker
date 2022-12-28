import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((transaction) => transaction.amount > 0 && transaction.amount)
    .reduce((acc, item) => (acc = acc + item));

  const expense = Math.abs(
    transactions
      .map((transaction) => transaction.amount < 0 && transaction.amount)
      .reduce((acc, item) => (acc = acc + item))
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
