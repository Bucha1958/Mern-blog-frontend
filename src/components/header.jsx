import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
    
        fetch('https://mern-blog-backend-0o00.onrender.com/profile', {
        credentials: 'include',
        })
        .then(response => response.json())
        .then(userInfo => {
            setUserInfo(userInfo);
        })
        .catch(error => {
            console.error("Error fetching user info:", error);
        });
        
    }, []);

    const Logout = () => {
        fetch('https://mern-blog-backend-0o00.onrender.com/logout', {
            credentials: 'include',
            method: 'POST',
        })
        .then(() => {
            setUserInfo(null); // Clear the username when logging out
        })
        .catch(error => {
            console.error("Error logging out:", error);
        });
    }

    const username = userInfo?.username;
    return ( 
        <header>
            <Link to="/" className='logo'>MyBlog</Link>
            <nav className='Navbar'>
            {username ? (
                <>
                    <Link to="/post">Create new post</Link>
                    <a onClick={Logout}>Logout</a>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
            </nav>
        </header>
    );
}

export default Header;
