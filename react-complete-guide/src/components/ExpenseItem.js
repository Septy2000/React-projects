import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
    const [amount, setAmount] = useState(props.amount);

    function clickHandler() {
        setAmount(amount + 10);
  
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Amount</button>
        </Card>
    );
}

export default ExpenseItem;
