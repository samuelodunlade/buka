import { useState } from "react"


const Form = () => {

    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //this handles form submission
    const handleLoginSubmit = (e)=> {
        e.preventDefault();
        if(email == "" || password == ""){
            alert("All fields are required")
            return false;
        }
        let user ={
            email: email,
            password: password
        }
        console.log(user);
    }

  return (
    <div>
        <h1>Login Form</h1>
        
        <form method="post" onSubmit={handleLoginSubmit}>

            <input type="email" name="email"  placeholder="email" value={email} onChange={
                (e)=>{ setEmail(e.target.value) }
                }
            />

            <input type="password" name="password" placeholder="password" value={password} onChange={
                (e)=>{setPassword(e.target.value)}
            }
            />

            <button type="submit">Login Now</button>

        </form>

    </div>
  )
}

export default Form