import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserInput(){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    function handleOnSubmit(e){
        e.preventDefault();
        navigate("/userDetails",{state:{name:name,password:password}})
    }

    return(
        <form onSubmit={handleOnSubmit}>
            <input type="text"
            placeholder="enter ur name" 
             value={name}
             onChange={(e)=>setName(e.target.value)}
            />
            <label>Enter your name here</label>
            <br/>
            <input type="password"
            placeholder="enter ur password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label>Enter your password here</label>
            <br/>
            <button type="submit">Submit the data</button>
        </form>
    )
}

export default UserInput;