import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const register = async (ev) => {
        ev.preventDefault();
        
        const response = await fetch('https://mern-blog-backend-0o00.onrender.com/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.status === 200) {
            alert('Registration successful')
        } else {
            alert('Registration failed')
        }
    }
    return ( 
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
                placeholder="Username" 
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password" 
                placeholder="Password" 
                value={password}
                onChange={ev => setPassword(ev.target.value)}    
            />
            <button>Register</button>
        </form>
     );
}
 
export default Register;