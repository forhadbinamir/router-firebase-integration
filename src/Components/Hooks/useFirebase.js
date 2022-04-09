import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])


    const signWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((resutl) => {
                const user = resutl.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return { user, handleSignOut, signWithGoogle }
};

export default useFirebase;