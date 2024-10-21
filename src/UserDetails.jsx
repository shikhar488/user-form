import { useLocation } from "react-router-dom";

function UserDetails(){
    
        const location = useLocation();
    const { name, password } = location.state || {}; 

    return (
        <div>
            <h1>Received Data</h1>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
        </div>
    );
    
}

export default UserDetails;