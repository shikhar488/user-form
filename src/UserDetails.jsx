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
        {selectedOptions && Array.isArray(selectedOptions) && selectedOptions.map((option, index) => (
          <li key={index}>{option.value}</li>
        ))}
      </ul>
        </div>
    );
    
}

export default UserDetails;