import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase.ts';
import { createUser } from './SaveUser.ts';

//this function provide user login, storing is auth in local storage, and call function that create user in db

//google method
export const signUpWithGoogle = async (setIsAuth: Function, setUserName: Function) => {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            setIsAuth(true);
            setUserName(result.user.displayName || "");
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("userName", result.user.displayName || "");
            localStorage.setItem("userID", result.user.uid);
            createUser();
            location.href = '/';
        })
        .catch((error) => {
            alert('Error signing in with Google: ' + error.message);
        });
};

//email and pass method
export const signUpWithEmail = async (setIsAuth: Function, setUserName: Function, email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
            setIsAuth(true);
            setUserName(result.user.displayName || "");
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("userName", result.user.displayName || "");
            localStorage.setItem("userID", result.user.uid);
            createUser();
            location.href = '/';
        })
        .catch((error) => {
            alert(`${email} is currently in use`);
            console.log(error);
        });
};

