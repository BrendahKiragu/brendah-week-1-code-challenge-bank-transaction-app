import React from "react";

function Header ({onHandleLog,isLoggedin, accountDetails}) {

  const showDetails = ()=>{
    //conditional rendering of acc details based on log status
    if(isLoggedin && accountDetails){
      return (<div>
        <p>AccountHolder : {accountDetails.accountHolder}</p>
        <p>AccountHolder : {accountDetails.accountNumber}</p>
      </div>)
    }else {
      return null
    }
  }
    return (
    <div>
      <h1>My Transactions Manager App</h1> 
      <button className="button" onClick={onHandleLog}>{isLoggedin ? "LOGOUT" : "LOGIN"}</button>
      {showDetails()}
    </div>
  )
}

export default Header;