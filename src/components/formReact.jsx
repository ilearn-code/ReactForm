import React, { useState } from 'react'
import './formReact.css'
import email_icon from "./assets/email.png"
import person_icon from "./assets/person.png"
import password_icon from "./assets/password.png"

 const FormReact = () =>{


 const [action, setAction]=useState("Login");


  return (
    <div className='container'>
        <div className="tittle">
<div className="tittleName">{action}</div>
<div className="tittleLine"></div>

        </div>
        <div className="inputs">
        {action==="Sign Up"?
      
        <div className="input">
        <img src={person_icon}  />
    <input type="text" placeholder='Enter a Name' />
    </div>
   
    :<div></div>
        }

    <div className="input">
        <img src={email_icon} />
    <input type="email"  placeholder='Enter a Email' />
    </div>

    <div className="input">
        <img src={password_icon}  />
    <input type="password" placeholder='Enter a Password'/>
    </div>
    { action==="Login"?
  <div className="texts">
  Lost password?<span>Click Here</span>
  </div>
  :<div>


    </div>

    }
  
    <div className="butttons">
    <div className={ action==="Sign Up"?"submit gray":"submit" } onClick={ ()=>{setAction("Login") }}>Login</div> 
<div className={ action==="Login"?"submit gray":"submit" }  onClick={ ()=>{setAction("Sign Up") }} >Sign Up</div> 
    </div>
</div>

</div>

  )
}


export default FormReact