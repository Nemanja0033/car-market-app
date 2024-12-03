import { useState } from "react";
import { signUpWithEmail, signUpWithGoogle } from "../api/CreateUser"
import { loginWithEmail } from "../api/Login";
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
    <div className="w-full z-10 h-screen bg-gray-100 flex justify-center items-center overflow-hidden">
  <div className="bg-white md:w-1/3 w-11/12 p-6 rounded-lg shadow-lg">

    <div className="flex justify-center mb-4">
      <img src="/loader.png" alt="logo" className="w-20" />
    </div>
    
    <div className="text-center mb-6">
      <h1 className="text-lg font-semibold text-gray-800">
        {!isSignUp 
          ? 'Sign up and explore the ads and advertise' 
          : 'Welcome back! Find some new wheels!'}
      </h1>
    </div>
    
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-primary focus:outline-none"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-primary focus:outline-none"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
    
    <div className="mt-4 text-center">
      <span
        className="text-sm text-gray-500 cursor-pointer hover:underline"
        onClick={handleStateChange}
      >
        {!isSignUp ? 'Already have an account?' : 'Create New Account'}
      </span>
      <button
        onClick={
          !isSignUp
            ? () => signUpWithEmail(setIsAuth, setUserName, email, password)
            : () => loginWithEmail(setIsAuth, setUserName, email, password)
        }
        className="w-full bg-primary text-white py-2 mt-4 rounded-md hover:bg-primary-dark transition duration-200"
      >
        {!isSignUp ? 'Sign Up' : 'Login'}
      </button>
    </div>
    
    <div className="mt-6 text-center">
      <span
        onClick={() => signUpWithGoogle(setIsAuth, setUserName)}
        className="text-primary font-medium cursor-pointer hover:underline"
      >
        Sign up with Google
      </span>
    </div>
  </div>
</div>

  )
}

export default LoginForm