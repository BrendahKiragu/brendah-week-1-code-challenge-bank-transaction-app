import React, { useState,useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import Header from './Header';
import '../App.css';

function App() {

  //creates 2 state variables: transactions and searchTerm
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [accountDetails, setAccountDetails] = useState(false);
  
  useEffect(() => {
    // Fetching  data from the local json-server
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  //adds a new transaction to our transactions array
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  //form the search input field
  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleLog = ()=>{
    setIsLoggedin((isLoggedin)=>!isLoggedin)
  }

  useEffect (()=>{
   if(isLoggedin){
      setAccountDetails({
        accountHolder : "John Doe",
        accountNumber : "1234",
      })
    }else {
      setAccountDetails(null)
    }
  }, [isLoggedin])

    return (
    <div className='App'>
      <Header 
      onHandleLog={handleLog} 
      isLoggedin = {isLoggedin}
      accountDetails = {accountDetails}
      />
      {isLoggedin ? <div> <SearchBar onSearch={handleSearchChange} /> 
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={transactions} searchTerm={searchTerm} /> </div>
      : "Please LOGIN!"}
    </div>
  );
}

export default App;
