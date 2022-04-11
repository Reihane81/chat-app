import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Components
import Navbar from '../Navbar/Navbar';

// Context
import { AuthContext } from '../../Context/AuthContextProvider'

// Styles
import styles from './Chats.module.css';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "22abf6db-9df1-49ba-875a-2c0faa8e8b76",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
            .then(avatar => {
                formdata.append("avatar", avatar, avatar.name)
                axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "29365544-3367-4486-acf5-1d4f2412fd77"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler = async() => {
        await auth.signOut();
        navigate("/")
    }

    if (!user || loading) return "loading..."

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="22abf6db-9df1-49ba-875a-2c0faa8e8b76"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;