import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Home from "../home/Home";
import "semantic-ui-css/semantic.min.css";
import "./LoginRegistration.css";
import { v4 as uuidv4 } from 'uuid';
export const baseUrl="http://localhost:8001/users"

// eslint-disable-next-line react/prop-types
const LoginRegistration = ({handleLoginForm}) => {
  const [userIsRegistered, setUserIsRegistered] = useState(true)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({
    id:uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    agreedToTerms: false,
  });

  const handleClick = () => {
    setUserIsRegistered(false);
  };

  //handle logout
  const handleLogout = () => {
    setUserIsLoggedIn(false);
  };

  return (
    
    <div className="login-page">
      {!userIsLoggedIn ? (
        userIsRegistered ? (
          <Login handleLogin={handleLoginForm} handleClick={handleClick}/>
        ) : (
          <Registration handleLogin={handleLoginForm} handleRegister={()=>setUserIsRegistered(true)} handleClick={handleClick} userData={userData} setUserData={setUserData}/>
        )
      ) : (
        <div>
          <Home handleLogout={handleLogout} />
        </div>
      )}
    </div>
  
  )
}

export default LoginRegistration;