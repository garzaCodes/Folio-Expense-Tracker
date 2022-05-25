import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TotalsDisplay from "./components/totals-display/totals-display.component";
import TransactionsList from "./components/transactions/transactions.comp";
import InputForm from "./components/input-form/input-form.comp";

function App() {
  return (
    <>
      <div className="card m-3" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h4>Expense Tracker</h4>
              <TotalsDisplay />
            </div>
            <div className="col">
              <TransactionsList />
            </div>
            <div className="col">
              <InputForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
