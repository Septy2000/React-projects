import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear() === parseInt(filteredYear)
    );

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
