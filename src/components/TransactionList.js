import React, { useContext } from "react";
import { Transaction } from './Transaction'

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(({id, text, amount}) => (
          <Transaction
            key={id}
            id={id}
            text={text} 
            amount={amount} />
        ))}
      </ul>
    </>
  );
};
