
import './App.css';
import { Header } from './components/header'
import { Balance } from './components/balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransactions } from './components/AddTransactions'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransactions/>
   </GlobalProvider>
  );
}

export default App;
