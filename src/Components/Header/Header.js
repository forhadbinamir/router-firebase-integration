import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <nav className='header'>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid
                    ?
                    <button onClick={handleSignOut}>Sing Out</button>
                    :
                    < Link to='/login'>Login</Link>
            }
        </nav >
    );
};

export default Header;