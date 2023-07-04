import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase/FirebaseConfig'
import { toast } from 'react-toastify';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [admin,setAdmin]=useState(false)

    useEffect(()=>{
        fetch(`http://localhost:9000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[user?.email])


    // webUser 
    const newuser = (email,password,name,photo) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                  }).then(() => {
                     //   save database user 
                        const information = {
                            name:user?.displayName,
                            email:user?.email,
                            img:user?.photoURL
                        }
                        console.log(information)
                        fetch(`http://localhost:9000/users`,{
                            method:'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body:JSON.stringify(information)
                        })
                        .then(res => res.json())
                        .then(data => data)
            // //   save database user 
                  }).catch((error) => {
                  });
                  
                setUser(user)
                  
                  toast.success('New User Create Successfull', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                setError(errorMessage);
            });
    }

    const loginuser = (email,password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('login successfull', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast(errorMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                setError(errorMessage);
            });
    }


    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    // Logout 
    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logout Successfull', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }).catch((error) => {
            // An error happened.
        });
    }

     // google Sing in 
     const googleSingIn = ()=>{
        setLoading(true)
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            //   save database user 
            const information = {
                name:user?.displayName,
                email:user?.email,
                img:user?.photoURL
            }
            console.log(information)
            fetch(`http://localhost:9000/users`,{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(information)
            })
            .then(res => res.json())
            .then(data => data)
            //   save database user 
            setLoading(false)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }

    const information = {
        newuser,
        loginuser,
        logout,
        user,
        error,
        loading,
        googleSingIn,
        admin
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;