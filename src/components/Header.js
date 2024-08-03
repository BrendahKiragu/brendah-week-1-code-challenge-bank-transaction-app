import React from "react";

function Header ({onLoggedMode, isLoggedIn}) {

  return (
    <div>
      <h1>Bank Of FlatIron</h1>
      <button onClick={onLoggedMode} >
        {isLoggedIn ? "LOGIN" : "LOGOUT"}
      </button>
    </div>
  )
}

export default Header;