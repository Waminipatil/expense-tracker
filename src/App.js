import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
