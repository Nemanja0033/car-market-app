import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { logout } from "../../actions/Logout";

const Navbar = () => {

  const { isAuth, setIsAuth } = useAuth();

  return (
    <nav className="w-full h-[80px] flex md:justify-evenly justify-between items-center bg-white shadow-sm">
        <div className="md:ml-0 ml-6">
            <Link to={'/'}><img className="h-16 cursor-pointer" src="/logo.png" alt="car market logo"  /></Link>
        </div>

        <div className="text-gray-400 items-center flex gap-4 md:mr-0 mr-6">
          <div className="items-center md:flex gap-8 hidden ">
          <Link className="flex gap-1 items-center hover:text-primary" to={'/'}>Home</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={'/ads'}>Advertisements</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={"/favourites/:id"}>Favourites</Link>
          </div>

        <Link to={"/createadd"}><button className="btn bg-black hover:bg-primary btn-sm text-white">Sell a car</button></Link>
         {!isAuth ?  <Link className="flex gap-1 items-center hover:text-primary" to={'/login'}><button className="btn bg-primary hover:bg-black btn-sm text-white">Sign Up</button></Link>
          :
          <button onClick={() => logout(setIsAuth)} className="btn btn-neutral btn-sm bg-primary hover:bg-black text-white">Sign out</button>
        }
        </div>
    </nav>
  )
}

export default Navbar