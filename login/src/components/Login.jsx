import React, {useState} from 'react';
import styles from "./Login.module.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       if(username === "user" && password === "password"){
        setError("");
        setSubmitted(true);
       }else{
        setError("Invalid username or password");
        setSubmitted(false);
       }
    }


  return (
    <div className={styles.login}>
        <h1>Login Page</h1>
        {submitted ? (
            <p>Welcome, {username}</p>
        ) : (
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <div>
                    <div className={styles.username}>
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" placeholder='username' value={username} onChange={handleUsername} required />
                    </div>
                
                    <div className={styles.password}>
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" placeholder="password" value={password} onChange={handlePassword} required />
                    </div>

                    <div className={styles.button}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>  
        )}  
    </div>
  )
}
