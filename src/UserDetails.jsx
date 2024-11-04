import { useLocation } from "react-router-dom";

function UserDetails(){
    
        const location = useLocation();
    const { name, password, email, date, selectedOptions } = location.state || {}; 

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);

    return (
        <div>
            <h1>Received Data</h1>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
            {isValid ? <p>Email: {email}</p> : <p>Invalid Email</p>}
            {date && <p>Selected Date: {date.toDateString()}</p>}
            <ul>
                {selectedOptions.map(([option, isSelected]) => (
                    isSelected && <li key={option}>{option}</li>
                ))}
            </ul>
        </div>
    );
    
}

export default UserDetails;