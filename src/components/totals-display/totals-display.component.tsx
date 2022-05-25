import "./totals-display.style.css";

export default function TotalsDisplay({ income = 0, expenses = 0 }: any) {
  return (
    <>
      <div className="card">
        <div className="card-body display-window">
          <div className="row">
            <div className="col-12 total">
              <small>Total</small>
              <div className="amount">${income - expenses}</div>
            </div>

            <div className="col income">
              <small>Income</small>
              <div className="amount">${income}</div>
            </div>

            <div className="col expenses">
              <small>Expenses</small>
              <div className="amount">${expenses}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
