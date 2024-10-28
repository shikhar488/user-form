import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserInput(){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    function handleOnSubmit(e){
        e.preventDefault();
        navigate("/userDetails",{state:{name:name,password:password,email:email}})
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

            <input type="email"
            placeholder="enter ur email" 
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             required
            />
            <label>Enter your email here</label>
            <br/>

            <input type="password"
            placeholder="enter ur password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            <label>Enter your password here</label>
            <br/>

            <input type="date" required/>
            <br/>

            <input type="file" required/>
            <br/>

            <fieldset>
                <legend>Choose from the following: </legend>

                <div>
                    <input type="checkbox" id="apple" checked />
                    <label htmlFor="apple">Apples</label>
                </div>

                <div>
                    <input type="checkbox" id="banana" />
                    <label htmlFor="banana">Banana</label>
                </div>

                <div>
                    <input type="checkbox" id="grapes" />
                    <label htmlFor="grapes">Grapes</label>
                </div>
            </fieldset>


            <button type="submit">Submit the data</button>
        </form>
    )
}

export default UserInput;
