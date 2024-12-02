import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config/firebase.ts'
import { useAuth } from '../context/AuthContext.tsx';
import { createUser } from './CreateUser.ts';

const { setIsAuth, setUserName } = useAuth();

//this function provide user login, storing is auth in loacl storage, and call function that create user in db

export const Login = async () => {
    signInWithPopup(auth, provider).then(async (result) => {
        setIsAuth(true);
        setUserName(result.user.displayName || "");
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("userName", result.user.displayName || "");
        localStorage.setItem("userID", result.user.uid)
        createUser();
    })
}