import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase/firebase';

// Icons
import google from '../../assets/google.svg';

// Styles
import styles from './Login.module.css';

const LogIn = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCatd}>
                <h2>Welcome to Botogram!</h2>

                <div 
                    className={styles.button}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default LogIn;