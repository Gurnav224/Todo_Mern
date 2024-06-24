import { useState } from "react"
import axios from "axios"
const Login = () => {
  const [loginData,setLoginData] = useState({
    email:'',
    password:''
  })


const handleChange = (e)=>{
  const {name,value}= e.target;
  setLoginData({
    ...loginData,
    [name]:value
  })
}


const [error , setError] = useState("");


const handleSubmit = async  (e)=>{
 e.preventDefault();
  setError('');

  try {
    const response = await axios.post('https://todo-mern-1-5nnb.onrender.com/api/v1/login',loginData);
     console.log('login user successfully',response.data)
  } catch (error) {
    setError('Error logging in. Please try again.')
  }

}

console.log(error)

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Enter your email here</label>
    <br />
    <input
     type="email" 
     id="email" 
     name="email"
     value={loginData.email}
     onChange={handleChange}
     required
      />
    <br />
<label htmlFor="password">Enter your password </label>
<br />
<input
 type="text"
 id="password" 
 name="password"
  value={loginData.password}
  onChange={handleChange}
  required
 />
<br />
<button type="submit">Submit</button>
    </form>
  )
}

export default Login
