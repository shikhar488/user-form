import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

function UserInput() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedOptions, setSelectedOptions] = useState({
        apple: true,
        banana: false,
        grapes: false,
    });

    const navigate = useNavigate();

    function handleCheckboxChange(e) {
        const { id, checked } = e.target;
        setSelectedOptions((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        navigate("/userDetails", {
            state: {
                name: name,
                password: password,
                email: email,
                date: date,
                selectedOptions: selectedOptions,
            },
        });
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Enter your name here</label>
                <br />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Enter your email here</label>
                <br />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Enter your password here</label>
                <br />

                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                <br />

                <input type="file" />
                <br />

                <fieldset>
                    <legend>Choose from the following:</legend>

                    <div>
                        <input
                            type="checkbox"
                            id="apple"
                            checked={selectedOptions.apple}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="apple">Apples</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="banana"
                            checked={selectedOptions.banana}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="banana">Banana</label>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            id="grapes"
                            checked={selectedOptions.grapes}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="grapes">Grapes</label>
                    </div>
                </fieldset>

                <button type="submit">Submit the data</button>
            </form>
        </>
    );
}

export default UserInput;
