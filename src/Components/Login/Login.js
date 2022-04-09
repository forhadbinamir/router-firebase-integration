import React from 'react';
import image from '../../images/Google__G__Logo.svg.png'
import useFirebase from '../Hooks/useFirebase';

const Login = () => {

    const { signWithGoogle } = useFirebase()
    return (
        <div>
            <h1>Please login</h1>
            <form action="">
                <input type="email" name="" id="" placeholder='Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>

            <button onClick={signWithGoogle} style={{ border: 'none', backgroundColor: 'white', marginTop: 10 }}><img width={25} src={image} alt="" />Sign in with google</button>
        </div>
    );
};

export default Login;