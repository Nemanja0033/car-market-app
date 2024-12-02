import { useState } from "react";
import { loginWithEmail, signUpWithEmail, signUpWithGoogle } from "../actions/Login"
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { setIsAuth, setUserName } = useAuth();

    const handleStateChange = () => {
        setIsSignUp(!isSignUp)
    }

  return (
    <div className="w-full z-10 h-screen bg-white flex justify-center overflow-hidden">
      <div className="md:w-1/4 w-full h-96 flex-row md:mt-32 mt-48 md:shadow-md">
        <div className="flex justify-center">
          <img src="/loader.png" alt="logo" className="w-1/4" />
        </div>
        <div className="ml-3 mr-3">
          <h1 className="text-md text-center text-primary tracking-wider">{!isSignUp ? 'Sign up and explore the ads and advertise' : 'Welcome back find some new wheels!'}</h1>
        </div>
        <div className="flex justify-center">
            <div className="flex-row">
                <label htmlFor="email">Email</label>
                <br />
                <input className="border h-8" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <div className="flex-row">
                <label htmlFor="email">Password</label>
                <br />
                <input className="border h-8" type="password" name="email"  onChange={(e) => setPassword(e.target.value)} />
                <br />
                <span className="text-sm text-gray-500 cursor-pointer" onClick={handleStateChange}>{!isSignUp ? 'Already have account?' : 'Create New Account'}</span>
                <br />
                <button onClick={isSignUp ? () => signUpWithEmail(setIsAuth, setUserName, email, password ) : () => loginWithEmail(setIsAuth, setUserName, email, password)} className="btn btn-sm bg-black text-white mt-3 hover:bg-primary">{!isSignUp ? 'Sign Up' : 'Login'}</button>
            </div>
            </div>
        </div>
        <div className="flex justify-center mt-6">
            <span onClick={() => signUpWithGoogle(setIsAuth, setUserName)} className="text-primary cursor-pointer">Sign up with Google</span>
        </div>
      </div>
    </div>
  )
}

export default LoginForm