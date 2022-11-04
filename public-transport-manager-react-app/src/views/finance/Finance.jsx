import React from 'react'
import FinanceTable from '../../components/financeTable/FinanceTable'
import { financeData,financeSummary } from '../../data/dummyFinanceData'
import './finance.scoped.css'

function Finance() {
  return (
    <div className="financeContainer">
      <div className="firstContainer">
        <div className="financeTitle h2">Finance Data</div>
        <div className="stats">
          <div className="totalIncome summaryData">
            <div className="label">Total Income&nbsp;</div>
            <div className="val">Rs. {financeSummary.totIncome}.00</div>
          </div>
          <div className="totalExpense summaryData">
            <div className="label">Total Expense</div>
            <div className="val">Rs. {financeSummary.totExpenses}.00</div>
          </div>
          <hr />
          <div className="totalProfit summaryData">
            <div className="label">Total Profit&nbsp;</div>
            <div className="val">Rs. {financeSummary.totProfit}.00</div>
          </div>
        </div>
        <hr />
      </div>
      <FinanceTable />
    </div>
  )
}

export default Finance
