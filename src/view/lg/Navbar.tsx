import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { logout } from "../../actions/Logout";
import { Tag } from "lucide-react";

const Navbar = () => {

  const { isAuth, setIsAuth } = useAuth();

  return (
    <nav className="w-full h-[80px] flex md:justify-evenly justify-between items-center bg-gray-50 shadow-md">
        <div className="md:ml-0 ml-6">
            <Link to={'/'}><img className="h-16 cursor-pointer" src="/logo.png" alt="car market logo"  /></Link>
        </div>

        <div className="text-gray-400 items-center flex gap-4 md:mr-0 mr-6">
          <div className="items-center md:flex gap-8 hidden ">
          <Link className="flex gap-1 items-center hover:text-primary" to={'/'}>Home</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={'/ads'}>Advertisements</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={"/favourites/:id"}>Favourites</Link>
          </div>

        <Link className=" hover:text-black text-primary flex gap-1 items-center" to={"/createadd"}><Tag size={16} />Sell a Car</Link>
         {!isAuth ?  <Link className="flex gap-1 items-center hover:text-primary" to={'/login'}><button className="btn bg-primary hover:bg-black btn-sm text-white">Sign Up</button></Link>
          :
          <button onClick={() => logout(setIsAuth)} className="btn btn-sm bg-primary hover:bg-black text-white">Sign out</button>
        }
        </div>
    </nav>
  )
}

export default Navbar