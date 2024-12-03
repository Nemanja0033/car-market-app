import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { logout } from "../../api/Logout";
import { LogOut, Tag, User } from "lucide-react";

const Navbar = () => {

  const { isAuth, setIsAuth } = useAuth();

  return (
    <nav className="w-full h-[80px] flex md:justify-around justify-between items-center bg-gray-50 shadow-md">
        <div className="md:ml-0 ml-6">
            <Link to={'/'}><img className="h-16 cursor-pointer" src="/logo.png" alt="car market logo"  /></Link>
        </div>

        <div className="text-gray-400 items-center flex gap-4 md:mr-0 mr-6">
          <div className="items-center md:flex gap-8 hidden ">
          <Link className="flex gap-1 items-center hover:text-primary" to={'/'}>Home</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={'/ads'}>Advertisements</Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={"/favourites/:id"}>Favourites</Link>
          </div>
        </div>

        <div className="flex items-center gap-4 md:mr-0 mr-6">
        <button className="btn bg-primary hover:bg-black btn-sm text-white"><Link className="flex gap-2" to={"/createadd"}><Tag size={16} />Sell a Car</Link></button>
         {!isAuth ?  <Link className="text-primary hover:text-black cursor-pointer" to={'/login'}><User /></Link>
          :
          <span className="text-primary hover:text-black cursor-pointer" onClick={() => logout(setIsAuth)} ><LogOut /></span>
        }
        </div>
    </nav>
  )
}

export default Navbar