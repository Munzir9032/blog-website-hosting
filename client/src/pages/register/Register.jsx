import './register.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        setError(false);
        try {
            e.preventDefault();
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login");

        } catch (error) {
            setError(true);
        }

    }
    return (
        <div className="register">
            <span className="registerTitle">
                Join US
            </span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label >UserName</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." onChange={e => {
                    setUsername(e.target.value)
                }} />
                <label >Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..." onChange={e => {
                    setEmail(e.target.value)
                }} />
                <label >Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..." onChange={e => {
                    setPassword(e.target.value)
                }} />
                <button className="registerButton" type="submit">
                    Register
                </button>

            </form>
            <button className="registerLoginButton">
                <Link className='link' to="/login"> Login</Link>
            </button>
            {error && <span style={{ color: "red", marginTop: "10px" }}>something went wrong</span>}
        </div >
    )
}
